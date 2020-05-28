package com.zemoso.todoapp.user.dao;

import com.zemoso.todoapp.user.enitity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    User findByEmail(String email);

}
