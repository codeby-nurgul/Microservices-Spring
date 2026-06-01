package com.turkcell.user_service.user_service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserServiceController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello User-Service";
    }
}
