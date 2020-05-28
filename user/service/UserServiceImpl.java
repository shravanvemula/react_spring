package com.zemoso.todoapp.user.service;

import com.zemoso.todoapp.user.dao.UserRepository;
import com.zemoso.todoapp.user.dto.UserDTO;
import com.zemoso.todoapp.user.enitity.User;
import com.zemoso.todoapp.user.objectmapper.UserMapper;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserMapper userMapper;

    @Override
    public UserDTO findByEmail(String email) {
        User user = userRepository.findByEmail(email);
        UserDTO userDto = userMapper.convertToDto(user);
        return userDto;
    }
    @Override
    public UserDTO save(UserDTO userDto)
    {
        User user = userMapper.convertToEntity(userDto);
        User theUser=userRepository.save(user);
        return userMapper.convertToDto(theUser);
    }

}

