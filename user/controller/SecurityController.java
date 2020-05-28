package com.zemoso.todoapp.user.controller;

import com.zemoso.todoapp.user.dto.AuthenticationRequestDTO;
import com.zemoso.todoapp.user.dto.AuthenticationResponseDTO;
import com.zemoso.todoapp.user.dto.SignUpRequestDTO;
import com.zemoso.todoapp.user.service.AuthServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/user")
public class SecurityController {
    @Autowired
    private AuthServiceImpl authServiceImpl;

    @RequestMapping(value = "/login", method = RequestMethod.POST, produces = "application/json")
    public ResponseEntity<AuthenticationResponseDTO> loginUser(@RequestBody AuthenticationRequestDTO authenticationRequestDTO) throws BadCredentialsException {
        AuthenticationResponseDTO authenticationResponseDTO = authServiceImpl.loginUser(authenticationRequestDTO);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "application/json; charset=UTF-8");
        return ResponseEntity.ok().headers(headers).body(authenticationResponseDTO);

    }
    @RequestMapping(value = "/signup", method = RequestMethod.POST,produces = "application/json")
    public ResponseEntity<AuthenticationResponseDTO> createUser(@RequestBody SignUpRequestDTO signUpRequest) throws BadCredentialsException {
        AuthenticationResponseDTO authenticationResponseDTO = authServiceImpl.signUpUser(signUpRequest);
        HttpHeaders headers = new HttpHeaders();
        headers.add(HttpHeaders.CONTENT_TYPE, "application/json; charset=UTF-8");
        return ResponseEntity.ok().headers(headers).body(authenticationResponseDTO);
    }


}

