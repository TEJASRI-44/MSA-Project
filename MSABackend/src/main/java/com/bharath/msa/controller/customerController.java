package com.bharath.msa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

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

import com.bharath.msa.entity.Customer;
import com.bharath.msa.service.CustomerServiceImpl;


@RestController
//@CrossOrigin("http://localhost:3000/")
public class customerController {
	
	@Autowired
	CustomerServiceImpl customerServiceImpl;

	
		@PostMapping("/customer")
		public ResponseEntity<Customer> addCustomer(@RequestBody Customer customer) {
			 return new ResponseEntity<>(customerServiceImpl.addCustomer(customer),HttpStatus.CREATED);
			 
		}
		
		 @GetMapping("/customer")
		    public List<Customer> getAllCustomers() {
		        return customerServiceImpl.getAllCustomers();
		    }
		 
		    @GetMapping("/customer/{id}")
		    public ResponseEntity<Customer> getCustomerById(@PathVariable Long id) {
		        return customerServiceImpl.getCustomerById(id)
		                .map(customer -> new ResponseEntity<>(customer, HttpStatus.OK))
		                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		    }
		    @DeleteMapping("/customer/{id}")
		    public ResponseEntity<Void> deleteCustomer(@PathVariable Long id) {
		        customerServiceImpl.deleteCustomer(id);
		        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		    }
		    @PutMapping("/customer/{id}")
		    public ResponseEntity<Customer> updateCustomer(@PathVariable Long id, @RequestBody Customer customerDetails) {
		        Customer updatedCustomer = customerServiceImpl.updateCustomer(id, customerDetails);
		        return new ResponseEntity<>(updatedCustomer, HttpStatus.OK);
		    }
		    
//		    @PostMapping("/customer/verify")
//		    public ResponseEntity<String> verifyCustomer(@RequestParam String email, @RequestParam String password) {
//		        boolean exists = customerServiceImpl.verifyCustomer(email, password);
//		        if (exists) {
//		            return ResponseEntity.ok("true");
//		        } else {
//		            return ResponseEntity.ok("false");
//		        }
//		    }
		    
		    @PostMapping("/customer/verify")
		    public ResponseEntity<Map<String, Object>> verifyCustomer(@RequestParam String email, @RequestParam String password) {
		        Optional<Customer> customer = customerServiceImpl.verifyCustomer(email, password);

		        Map<String, Object> response = new HashMap<>();
		        if (customer.isPresent()) {
		            response.put("success", "true");
		            response.put("customer", customer.get());
		        } else {
		            response.put("success", "false");
		            response.put("customer", null);
		        }
		        return ResponseEntity.ok(response);
		    }


//		    @PostMapping("/customer/{customerId}/orders")
//		    public ResponseEntity<Order> createOrder(@PathVariable Long customerId, @RequestBody Order order) {
//		        Order createdOrder = customerServiceImpl.createOrder(customerId, order);
//		        return new ResponseEntity<>(createdOrder, HttpStatus.CREATED);
//		    }
//	
//		    @GetMapping("/customer/{customerId}/orders")
//		    public List<Order> getOrdersForCustomer(@PathVariable Long customerId) {
//		        return customerServiceImpl.getOrdersForCustomer(customerId);
//		    }

}
