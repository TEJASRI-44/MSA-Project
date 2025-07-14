package com.bharath.msa.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.bharath.msa.entity.Cart;
import com.bharath.msa.entity.Customer;
import com.bharath.msa.entity.Medicines;
import com.bharath.msa.entity.Orders;
import com.bharath.msa.entity.Sales;
import com.bharath.msa.repository.CartRepository;
import com.bharath.msa.repository.CustomerRepository;
import com.bharath.msa.repository.MedicinesRepository;
import com.bharath.msa.repository.OrdersRepository;
import com.bharath.msa.repository.SalesRepository;

@Service
public class CartServiceImpl {
	
	@Autowired
	CartRepository cartRepository;
	@Autowired
	OrdersRepository ordersRepository;
	@Autowired
	CustomerRepository customerRepository;
	@Autowired 
	MedicinesRepository medicinesRepository;
	@Autowired
	SalesRepository salesRepository;
	
	@Autowired
	private RestTemplate restTemplate;
	
	
	 public Cart addToCart(Long customerId, Long medicineId, int quantity) {
		 	Customer customer = customerRepository.findById(customerId)
                 .orElseThrow(() -> new RuntimeException("Customer not found with ID: " + customerId));
		 	Medicines medicine = medicinesRepository.findById(medicineId)
                 .orElseThrow(() -> new RuntimeException("Medicine not found with ID: " + medicineId));

					// Create the cart item and set the retrieved entities
					Cart cartItem = new Cart();
					cartItem.setCustomer(customer);
					cartItem.setMedicine(medicine);
					cartItem.setQuantity(quantity);
					cartItem.setAddedDate(LocalDate.now());
					
					return cartRepository.save(cartItem);
	    }

	    // Method to checkout the cart and place an order
//	    public List<Orders> checkout(Long customerId) {
//	        List<Cart> cartItems = cartRepository.findByCustomerId(customerId);
//	        List<Orders> orders = new ArrayList<>();
//
//	        for (Cart cartItem : cartItems) {
//	            Orders order = new Orders();
//	            order.setCustomer(cartItem.getCustomer());
//	            order.setMedicine(cartItem.getMedicine());
//	            order.setQuantity(cartItem.getQuantity());
//	            order.setOrderDate(LocalDate.now());
//	            orders.add(ordersRepository.save(order));
//	        }
//	        cartRepository.deleteAll(cartItems);  // Clear cart after order
//	        return orders;
//	    }
	 
	 
	 public List<Orders> checkout(Long customerId) {
		    List<Cart> cartItems = cartRepository.findByCustomerId(customerId);
		    List<Orders> orders = new ArrayList<>();

		    for (Cart cartItem : cartItems) {
		        // Retrieve the medicine and update its quantity
		        Medicines medicine = cartItem.getMedicine();
		        Double newQuantity = medicine.getQuantity() - cartItem.getQuantity();

		        if (newQuantity < 0) {
		            throw new RuntimeException("Insufficient quantity for medicine: " + medicine.getTradeName());
		        }

		        medicine.setQuantity(newQuantity); // Decrease the quantity

		        // Call the updateMedicine endpoint
		        String url = "https://msabackend-production.up.railway.app/medicine/" + medicine.getId();
		        restTemplate.put(url, medicine);

		        // Create and save order entry
		        Orders order = new Orders();
		        order.setCustomer(cartItem.getCustomer());
		        order.setMedicine(medicine);
		        order.setQuantity(cartItem.getQuantity());
		        order.setOrderDate(LocalDate.now());
		        orders.add(ordersRepository.save(order));

		        // Create and save sales entry
		        Sales sale = new Sales();
		        sale.setMedicine(medicine);
		        sale.setQuantitySold(cartItem.getQuantity());
		        sale.setSaleDate(new Date());
		        sale.calculateTotalAmount();
		        salesRepository.save(sale);
		    }

		    // Clear cart after processing
		    cartRepository.deleteAll(cartItems);  
		    return orders;
		}
	 
	 

	    public Cart updateQuantity(Long customerId, Long medicineId, int quantity) {
	        Cart cartItem = cartRepository.findByCustomerIdAndMedicineId(customerId, medicineId)
	                .orElseThrow(() -> new RuntimeException("Cart item not found"));

	        cartItem.setQuantity(quantity); // Update the quantity
	        return cartRepository.save(cartItem); // Save and return the updated cart item
	    }
	 
	  public List<Cart> getAllCarts() {
	        return cartRepository.findAll();
	    }

	    public Cart getCartById(Long id) {
	        return cartRepository.findById(id).orElse(null);
	    }

	    public Cart updateCart(Long id, Cart updatedCart) {
	        if (cartRepository.existsById(id)) {
	            updatedCart.setId(id);
	            return cartRepository.save(updatedCart);
	        }
	        return null; // Or throw an exception
	    }

	    public boolean deleteCart(Long id) {
	        if (cartRepository.existsById(id)) {
	            cartRepository.deleteById(id);
	            return true;
	        }
	        return false; // Or throw an exception
	    }



}
