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
import org.springframework.web.bind.annotation.RestController;

import com.bharath.msa.entity.Orders;
import com.bharath.msa.service.OrdersServiceImpl;

@RestController
//@CrossOrigin("http://localhost:3000/")
public class OrdersController {
	
	@Autowired
	OrdersServiceImpl ordersServiceImpl;

	@PostMapping("/orders")
    public ResponseEntity<Orders> createOrder(@RequestBody Orders order) {
        Orders createdOrder = ordersServiceImpl.createOrder(order);
        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
    }
	
	 @GetMapping("/orders/{id}")
	    public ResponseEntity<Orders> getOrderById(@PathVariable Long id) {
	        return ordersServiceImpl.getOrderById(id)
	            .map(order -> new ResponseEntity<>(order, HttpStatus.OK))
	            .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
	    }

	    @GetMapping("/orders")
	    public ResponseEntity<List<Orders>> getAllOrders() {
	        List<Orders> orders = ordersServiceImpl.getAllOrders();
	        return new ResponseEntity<>(orders, HttpStatus.OK);
	    }
	    
	    @PutMapping("/orders/{id}")
	    public ResponseEntity<Orders> updateOrder(@PathVariable Long id, @RequestBody Orders orderDetails) {
	        Orders updatedOrder = ordersServiceImpl.updateOrder(id, orderDetails);
	        return new ResponseEntity<>(updatedOrder, HttpStatus.OK);
	    }

	    @DeleteMapping("/orders/{id}")
	    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
	    	ordersServiceImpl.deleteOrder(id);
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    }
	    @GetMapping("/orders/customer/{customerId}")
	    public ResponseEntity<List<Orders>> getOrdersByCustomerId(@PathVariable Long customerId) {
	        List<Orders> orders = ordersServiceImpl.getOrdersByCustomerId(customerId);
	        return new ResponseEntity<>(orders, HttpStatus.OK);
	    }

	    
}
