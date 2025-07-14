package com.bharath.msa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharath.msa.entity.Orders;
import com.bharath.msa.repository.OrdersRepository;

@Service
public class OrdersServiceImpl {

	@Autowired
	OrdersRepository ordersRepository;
	
    public Orders createOrder(Orders order) {
        return ordersRepository.save(order);
    }
    

    public Optional<Orders> getOrderById(Long id) {
        return ordersRepository.findById(id);
    }

   
    public List<Orders> getAllOrders() {
        return ordersRepository.findAll();
    }
    
    
    public List<Orders> getOrdersByCustomerId(Long customerId) {
        return ordersRepository.findByCustomerId(customerId);
    }
    
    public Orders updateOrder(Long id, Orders orderDetails) {
        Orders order = ordersRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Order not found with id " + id));

        // Update order details
        if (orderDetails.getCustomer() != null) {
            order.setCustomer(orderDetails.getCustomer());
        }
        if (orderDetails.getMedicine() != null) {
            order.setMedicine(orderDetails.getMedicine());
        }
        order.setQuantity(orderDetails.getQuantity());
        order.setOrderDate(orderDetails.getOrderDate());

        return ordersRepository.save(order);
    }

   
    public void deleteOrder(Long id) {
    	ordersRepository.deleteById(id);
    }

}
