package com.bharath.msa.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
//@CrossOrigin("http://localhost:3000/")
public class HelloController {
	
	@GetMapping("/")
	public String helloAll() {
		return "Hello All";
	}

}
