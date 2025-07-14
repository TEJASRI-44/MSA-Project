package com.bharath.msa.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharath.msa.entity.Medicines;
import com.bharath.msa.entity.Vendor;
import com.bharath.msa.entity.VendorReceivedOrder;
import com.bharath.msa.repository.MedicinesRepository;
import com.bharath.msa.repository.VendorReceivedOrderRepository;
import com.bharath.msa.repository.VendorRepository;

@Service
public class VendorReceivedOrderServiceImpl {
	
	 @Autowired
	    private VendorReceivedOrderRepository vendorReceivedOrderRepository;
	 @Autowired 
	 private MedicinesRepository medicinesRepository;
	 @Autowired
	 private VendorRepository vendorRepository;

	    

	 public VendorReceivedOrder storeOrder(VendorReceivedOrder order) {
		    // Fetch the Medicine and Vendor entities by their IDs
		    Medicines medicine = medicinesRepository.findById(order.getMedicine().getId())
		            .orElseThrow(() -> new ResourceNotFoundException("Medicine with ID " + order.getMedicine().getId() + " not found"));
		    
		    Vendor vendor = vendorRepository.findById(order.getVendor().getId())
		            .orElseThrow(() -> new ResourceNotFoundException("Vendor with ID " + order.getVendor().getId() + " not found"));

		    // Set the fetched Medicine and Vendor to the order
		    order.setMedicine(medicine);
		    order.setVendor(vendor);

		    // Set the order date to the current date
		    order.setOrderDate(new Date());  // Or use a specific date format if needed

		    // Set the status to "PENDING"
		    order.setStatus("PENDING");

		    // Save the order to the database and return the saved entity
		    return vendorReceivedOrderRepository.save(order);
		}


	 public List<VendorReceivedOrder> storeOrders(List<VendorReceivedOrder> orders) {
		    for (VendorReceivedOrder order : orders) {
		        // Fetch Medicine and Vendor entities by their IDs
		        Medicines medicine = medicinesRepository.findById(order.getMedicine().getId())
		                .orElseThrow(() -> new ResourceNotFoundException("Medicine with ID " + order.getMedicine().getId() + " not found"));
		        
		        Vendor vendor = vendorRepository.findById(order.getVendor().getId())
		                .orElseThrow(() -> new ResourceNotFoundException("Vendor with ID " + order.getVendor().getId() + " not found"));

		        // Set the fetched Medicine and Vendor to the order
		        order.setMedicine(medicine);
		        order.setVendor(vendor);

		        // Set the order date to the current date
		        order.setOrderDate(new Date());

		        // Set the status to "PENDING"
		        order.setStatus("PENDING");
		    }

		    // Save the list of orders to the database and return the saved orders
		    return vendorReceivedOrderRepository.saveAll(orders);
		}


	    public List<VendorReceivedOrder> getOrders() {
	        List<VendorReceivedOrder> orders = vendorReceivedOrderRepository.findAll();
	        // No need to modify date or status when retrieving orders
	        return orders;
	    }
	    
	 public List<VendorReceivedOrder> getOrdersByVendor(Long vendorId) {
		    // Fetch orders only for the given vendorId
		    return vendorReceivedOrderRepository.findByVendorId(vendorId);
		}
	 
	    public List<VendorReceivedOrder> getPendingOrdersByVendor(Long vendorId) {
	        // Fetch pending orders for the specified vendor
	        return vendorReceivedOrderRepository.findByVendorIdAndStatus(vendorId, "Pending");
	    }
	    
	    public List<VendorReceivedOrder> updateExistingOrders(List<VendorReceivedOrder> orders) {
	        // Ensure all orders have a valid ID to be updated
	        for (VendorReceivedOrder order : orders) {
	            if (order.getId() == null || !vendorReceivedOrderRepository.existsById(order.getId())) {
	                throw new IllegalArgumentException("Order ID must be valid for updating existing entries.");
	            }
	        }

	        // Save all the orders; JPA will update the ones with existing IDs
	        return vendorReceivedOrderRepository.saveAll(orders);
	    }

}
