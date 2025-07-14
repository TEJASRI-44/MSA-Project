package com.bharath.msa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharath.msa.entity.Customer;
import com.bharath.msa.repository.CustomerRepository;
import com.bharath.msa.repository.OrdersRepository;

@Service
public class CustomerServiceImpl {
	
	@Autowired
	CustomerRepository customerRepository;
	
	@Autowired
	OrdersRepository orderRepository;

	public Customer addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepository.save(customer);
	}

	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return customerRepository.findAll();
	}
	
	 public Optional<Customer> getCustomerById(Long id) {
	        return customerRepository.findById(id);
	    }

	public void deleteCustomer(Long id) {
		// TODO Auto-generated method stub
		customerRepository.deleteById(id);
		
	}
	
	public Customer updateCustomer(Long id, Customer customerDetails) {
	    Customer customer = customerRepository.findById(id).orElseThrow();

	    // Update fields if provided
	    if (customerDetails.getName() != null) {
	        customer.setName(customerDetails.getName());
	    }
	    if (customerDetails.getPassword() != null) {
	        customer.setPassword(customerDetails.getPassword());
	    }
	    if (customerDetails.getEmail() != null) {
	        customer.setEmail(customerDetails.getEmail());
	    }

	    return customerRepository.save(customer);
	}
	
//	public boolean verifyCustomer(String email, String password) {
//        return customerRepository.findByEmailAndPassword(email, password).isPresent();
//    }
	
    public Optional<Customer> verifyCustomer(String email, String password) {
        return customerRepository.findByEmailAndPassword(email, password);
    }




//	 public Order createOrder(Long customerId, Order order) {
//	        Customer customer = customerRepository.findById(customerId).orElseThrow();
//	        order.setCustomer(customer);
//	        return orderRepository.save(order);
//	    }
//	 
//	 public List<Order> getOrdersForCustomer(Long customerId) {
//	        return orderRepository.findByCustomerId(customerId);
//	    }

}
