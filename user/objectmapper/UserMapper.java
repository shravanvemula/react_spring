package com.zemoso.todoapp.user.objectmapper;

import com.zemoso.todoapp.user.dto.UserDTO;
import com.zemoso.todoapp.user.enitity.User;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    @Autowired
    private ModelMapper modelMapper;

    public UserDTO convertToDto(User user) {
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        return userDTO;
    }
    public User convertToEntity(UserDTO theUserDto)
    {
        User user = modelMapper.map(theUserDto, User.class);
        return user;
    }
}
