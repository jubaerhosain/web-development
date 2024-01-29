package com.jwtauth.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jwtauth.configs.JwtService;
import com.jwtauth.entities.User;
import com.jwtauth.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/auth")
public class AuthenticationController {
	@Autowired
	private UserRepository repository;
	@Autowired
	private JwtService jwtService;

	@PostMapping("/register")
	public String register(@RequestBody User user) {
		System.out.println(this.getClass());
		var savedUser = repository.save(user);
		var jwtToken = jwtService.generatToken(user);
		repository.save(user);
		return jwtToken;

	}

	@GetMapping("/user")
	public String getAllUser() {
		return "Users Retrieved";
	}
}
