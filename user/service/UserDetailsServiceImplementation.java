package com.zemoso.todoapp.user.service;

import com.zemoso.todoapp.user.dto.UserDTO;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@AllArgsConstructor
public class UserDetailsServiceImplementation implements UserDetailsService {
    @Autowired
    UserService userService;

    @Override
    public UserDetails loadUserByUsername(String email) throws RuntimeException {
        UserDTO user = userService.findByEmail(email);
        return new org.springframework.security.core.userdetails.User(user.getId().toString(), user.getPassword(), new ArrayList<>());
    }
}