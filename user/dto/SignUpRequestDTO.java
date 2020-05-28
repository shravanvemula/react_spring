package com.zemoso.todoapp.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.Serializable;

@Data
@Component
@AllArgsConstructor
@NoArgsConstructor
public class SignUpRequestDTO implements Serializable {

    private String email;
    private String username;
    private String password;


}
