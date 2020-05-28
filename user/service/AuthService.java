package com.zemoso.todoapp.user.service;

import com.zemoso.todoapp.user.dto.AuthenticationRequestDTO;
import com.zemoso.todoapp.user.dto.AuthenticationResponseDTO;
import com.zemoso.todoapp.user.dto.SignUpRequestDTO;
import org.springframework.security.authentication.BadCredentialsException;

public interface AuthService {

    AuthenticationResponseDTO loginUser(AuthenticationRequestDTO authenticationRequestDTO) throws Exception;
    AuthenticationResponseDTO signUpUser(SignUpRequestDTO signUpRequest) throws Exception;
}
