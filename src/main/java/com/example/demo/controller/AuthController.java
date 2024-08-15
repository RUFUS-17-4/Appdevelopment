package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import java.util.List;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;



@CrossOrigin("*")
@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping("/get")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
    @GetMapping("/login")
    public boolean getlogin(@RequestParam String email,@RequestParam String password){
        return userService.getlogin(email,password);
    }
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
    @PutMapping("/update")
    public User updatUser(@RequestParam String email,@RequestParam String newpassword){
        return userService.updatUser(email,newpassword);
    }
}
