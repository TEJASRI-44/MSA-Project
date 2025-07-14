package com.bharath.msa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bharath.msa.entity.Cart;
import com.bharath.msa.entity.Orders;
import com.bharath.msa.service.CartServiceImpl;

@RestController
//@CrossOrigin("http://localhost:3000/")
public class CartController {
	@Autowired
	CartServiceImpl cartServiceImpl;
	
//    @PostMapping("/cart/add")
//    public ResponseEntity<Cart> addToCart(@RequestParam Long customerId, @RequestParam Long medicineId, @RequestParam int quantity) {
//        return new ResponseEntity<>(cartServiceImpl.addToCart(customerId, medicineId, quantity), HttpStatus.CREATED);
//    }
	@PostMapping("/cart/add")
	public ResponseEntity<Cart> addToCart(
	        @RequestParam Long customerId,
	        @RequestParam Long medicineId,
	        @RequestParam int quantity) {
	    Cart cartItem = cartServiceImpl.addToCart(customerId, medicineId, quantity);
	    return new ResponseEntity<>(cartItem, HttpStatus.CREATED);
	}


    @PostMapping("/cart/checkout/{customerId}")
    public ResponseEntity<List<Orders>> checkout(@PathVariable Long customerId) {
        return new ResponseEntity<>(cartServiceImpl.checkout(customerId), HttpStatus.CREATED);
    }
    
    
    @GetMapping("/cart")
    public ResponseEntity<List<Cart>> getAllCarts() {
        List<Cart> carts = cartServiceImpl.getAllCarts();
        return new ResponseEntity<>(carts, HttpStatus.OK);
    }

    @GetMapping("/cart/{id}")
    public ResponseEntity<Cart> getCartById(@PathVariable Long id) {
        Cart cartItem = cartServiceImpl.getCartById(id);
        return cartItem != null ? 
            new ResponseEntity<>(cartItem, HttpStatus.OK) : 
            new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PutMapping("/cart/{id}")
    public ResponseEntity<Cart> updateCart(@PathVariable Long id, @RequestBody Cart updatedCart) {
        Cart cartItem = cartServiceImpl.updateCart(id, updatedCart);
        return cartItem != null ? 
            new ResponseEntity<>(cartItem, HttpStatus.OK) : 
            new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/cart/{id}")
    public ResponseEntity<Void> deleteCart(@PathVariable Long id) {
        return cartServiceImpl.deleteCart(id) ? 
            new ResponseEntity<>(HttpStatus.NO_CONTENT) : 
            new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    
    //updating the medicine quantity
    @PutMapping("/cart/updateQuantity")
    public ResponseEntity<Cart> updateQuantity(
            @RequestParam Long customerId,
            @RequestParam Long medicineId,
            @RequestParam int quantity) {
        Cart updatedCartItem = cartServiceImpl.updateQuantity(customerId, medicineId, quantity);
        return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
    }



}
