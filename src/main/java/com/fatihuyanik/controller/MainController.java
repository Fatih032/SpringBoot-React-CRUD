package com.fatihuyanik.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {


    //http://localhost:8081/login
    @GetMapping("/login")
    public String login() {
        return "login";
    }

    @GetMapping("/register")
    public String register() {
        return "register";
    }

    //http://localhost:8081/index
    @GetMapping("/index")
    public String index() {
        return "index";
    }

    //http://localhost:8081/deneme
    @GetMapping("/deneme")
    public String deneme() {
        return "deneme";
    }

}
