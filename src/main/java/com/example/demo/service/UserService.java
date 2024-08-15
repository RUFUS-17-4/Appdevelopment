package com.example.demo.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user) {
        return userRepository.save(user);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public boolean getlogin(String email,String password){
        User user=userRepository.findByEmail(email);
        if(user.password == password) return true;
        else return false;
    }
    public User updatUser(String email,String newpassword){
        User user=userRepository.findByEmail(email);
        if(user!=null){
            user.setPassword(newpassword);
            return userRepository.save(user);
        }
        return null;
    }
}
