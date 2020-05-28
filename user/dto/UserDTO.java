package com.zemoso.todoapp.user.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.UUID;

@Component
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private UUID id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    private String createdBy;

    private String lastModifiedBy;

    private Date createdOn;

    private Date lastModifiedOn;
}
