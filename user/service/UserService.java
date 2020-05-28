package com.zemoso.todoapp.user.service;

import com.zemoso.todoapp.user.dto.UserDTO;

public interface UserService {

    UserDTO findByEmail(String email);
    UserDTO save(UserDTO userDto);
}
