package com.zemoso.todoapp.user.service;

import com.zemoso.todoapp.user.dto.AuthenticationRequestDTO;
import com.zemoso.todoapp.user.dto.AuthenticationResponseDTO;
import com.zemoso.todoapp.user.dto.SignUpRequestDTO;
import com.zemoso.todoapp.user.dto.UserDTO;
import com.zemoso.todoapp.user.util.JwtUtil;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class AuthServiceImpl implements AuthService {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtil jwtTokenUtil;
    @Autowired
    private UserService userService;
    @Autowired
    private UserDetailsServiceImplementation userDetailsService;
    @Autowired
    private PasswordEncoder passwordEncoder;


    public AuthServiceImpl(AuthenticationManager authenticationManager, JwtUtil jwtTokenUtil, UserService userService, UserDetailsServiceImplementation userDetailsService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenUtil = jwtTokenUtil;
        this.userService = userService;
        this.userDetailsService=userDetailsService;
    }


    private String generateAuthToken(UserDetails userDetails) {
        String authToken = jwtTokenUtil.generateToken(userDetails);
        return authToken;

    }

    @Override
    public AuthenticationResponseDTO loginUser(AuthenticationRequestDTO authenticationRequestDTO) throws BadCredentialsException {
        log.info("username {}", authenticationRequestDTO.getUsername());
        log.info("User {}", userDetailsService.loadUserByUsername(authenticationRequestDTO.getUsername()));
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authenticationRequestDTO.getUsername(), authenticationRequestDTO.getPassword()));
        String authToken = generateAuthToken(userDetailsService.loadUserByUsername(authenticationRequestDTO.getUsername()));
        String expiration = jwtTokenUtil.extractExpiration(authToken).toString();
        log.info("Date {}", jwtTokenUtil.extractExpiration(authToken));
        AuthenticationResponseDTO authenticationResponseDTO = new AuthenticationResponseDTO(authToken, expiration);
        return authenticationResponseDTO;
    }

    @Override
    public AuthenticationResponseDTO signUpUser(SignUpRequestDTO signUpRequest) throws BadCredentialsException {

        String name[] = signUpRequest.getUsername().split(" ");
        String userFirstName = name[0];
        String userLastName = "";
        for (int i = 1; i < name.length; i++) {
            userLastName = userLastName + " " + name[i];
        }
        UserDTO userDto = new UserDTO();
        userDto.setEmail(signUpRequest.getEmail());
        userDto.setFirstName(userFirstName);
        userDto.setLastName(userLastName);
        userDto.setCreatedOn(new Date());
//        userDto.setPassword(signUpRequest.getPassword());
        userDto.setPassword(passwordEncoder.encode(signUpRequest.getPassword()));
        log.info("User : {}",userDto.toString());
        userService.save(userDto);

        String authToken = generateAuthToken(userDetailsService.loadUserByUsername(signUpRequest.getEmail()));
        String expiration = jwtTokenUtil.extractExpiration(authToken).toString();
        log.info("Date {}", jwtTokenUtil.extractExpiration(authToken));
        AuthenticationResponseDTO authenticationResponseDTO = new AuthenticationResponseDTO(authToken, expiration);
        return authenticationResponseDTO;
    }

}
