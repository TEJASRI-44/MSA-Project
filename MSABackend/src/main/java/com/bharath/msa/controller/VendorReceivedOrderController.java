package com.bharath.msa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.bharath.msa.entity.Medicines;
import com.bharath.msa.entity.VendorReceivedOrder;
import com.bharath.msa.service.VendorReceivedOrderServiceImpl;

@RestController
//@CrossOrigin("http://localhost:3000/")
public class VendorReceivedOrderController {

	@Autowired
	VendorReceivedOrderServiceImpl vendorOrderReceivedServiceImpl;
	
	 @PostMapping("/vendor-order")
	    public ResponseEntity<VendorReceivedOrder> storeOrder(@RequestBody VendorReceivedOrder order) {
	        VendorReceivedOrder savedOrder = vendorOrderReceivedServiceImpl.storeOrder(order);
	        return ResponseEntity.ok(savedOrder);
	    }
	 
	    @GetMapping("/vendor-order")
	    public ResponseEntity<List<VendorReceivedOrder>> getOrders() {
	        List<VendorReceivedOrder> orders = vendorOrderReceivedServiceImpl.getOrders();
	        return ResponseEntity.ok(orders);
	    }
	 @GetMapping("/vendor-order/{vendorId}")
	 public ResponseEntity<List<VendorReceivedOrder>> getOrdersByVendor(@PathVariable Long vendorId) {
	     // Fetch orders by vendorId
	     List<VendorReceivedOrder> orders = vendorOrderReceivedServiceImpl.getOrdersByVendor(vendorId);
	     return ResponseEntity.ok(orders);
	 }

	    
	    @PostMapping("/vendor-order/bulk")
	    public ResponseEntity<List<VendorReceivedOrder>> storeOrders(@RequestBody List<VendorReceivedOrder> orders) {
	        List<VendorReceivedOrder> savedOrders = vendorOrderReceivedServiceImpl.storeOrders(orders);
	        return ResponseEntity.ok(savedOrders);
	    }
	    
	    @Autowired
	    private RestTemplate restTemplate;

	    // Endpoint to update all pending VendorReceivedOrders for a specific vendor
	    @PutMapping("/update-pending-orders/{vendorId}")
	    public ResponseEntity<List<VendorReceivedOrder>> updatePendingOrdersForVendor(@PathVariable Long vendorId) {
	        try {
	            // Retrieve all pending VendorReceivedOrders for the given vendor
	            List<VendorReceivedOrder> pendingOrders = vendorOrderReceivedServiceImpl.getPendingOrdersByVendor(vendorId);

	            for (VendorReceivedOrder order : pendingOrders) {
	                // Get the Medicine associated with the order
	                Medicines medicine = order.getMedicine();
	                if (medicine == null) {
	                    continue; // Skip if no medicine is associated
	                }

	                // Calculate the new quantity
	                double newQuantity = medicine.getQuantity() + order.getQuantity();

	                // Update the quantity in the Medicines object
	                medicine.setQuantity(newQuantity);

	                // Use RestTemplate to call the updateMedicine endpoint
	                String url = "http://localhost:8081/medicine/" + medicine.getId();
	                restTemplate.put(url, medicine);

	                // Update the status of the VendorReceivedOrder to "Completed"
	                order.setStatus("Completed");
	            }

	            // Save all updated orders
	            List<VendorReceivedOrder> updatedOrders = vendorOrderReceivedServiceImpl.updateExistingOrders(pendingOrders);

	            // Return the list of updated VendorReceivedOrders
	            return ResponseEntity.ok(updatedOrders);
	        } catch (Exception e) {
	            // Handle exceptions and return a 500 Internal Server Error response
	            return ResponseEntity.status(500).body(null);
	        }
	    }

}
