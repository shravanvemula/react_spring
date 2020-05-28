package com.zemoso.todoapp.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import java.io.Serializable;

@Data
@AllArgsConstructor
public class AuthenticationResponseDTO implements Serializable {

    private final String authToken;
    private String expirationDate;


}
