package com.turkcell.product_service;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ProductServiceController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello Product-Service";
    }
}
