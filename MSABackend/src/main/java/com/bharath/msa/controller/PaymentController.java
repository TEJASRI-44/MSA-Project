package com.bharath.msa.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.bharath.msa.entity.Payment;
import com.bharath.msa.entity.VendorReceivedOrder;
import com.bharath.msa.service.PaymentServiceImpl;


@RestController
//@CrossOrigin("http://localhost:3000/")
public class PaymentController {
	
	@Autowired
	private PaymentServiceImpl paymentServiceImpl;
	
	@GetMapping("/payments")
    public ResponseEntity<List<Payment>> getAllPayments() {
        List<Payment> payments = paymentServiceImpl.getAllPayments();
        return ResponseEntity.ok(payments);
    }

	 @PutMapping("/payment/create-payment")
	    public ResponseEntity<Payment> createPaymentFromOrders(@RequestBody List<VendorReceivedOrder> completedOrders) {
	        try {
	            // Initialize variables for total amount and list of medicine details
	            double totalAmount = 0.0;
	            List<Payment.MedicineDetail> medicineDetails = new ArrayList<>();

	            // Loop through the completed orders to calculate the total amount and prepare medicine details
	            for (VendorReceivedOrder order : completedOrders) {
	                // Extract details from each completed order
	                Payment.MedicineDetail detail = new Payment.MedicineDetail();
	                detail.setMedicineId(order.getMedicine().getId());
	                detail.setTradeName(order.getMedicine().getTradeName());
	                detail.setQuantityOrdered(order.getQuantity());
	                detail.setUnitSellingPrice(order.getMedicine().getUnitPurchasePrice());

	                // Calculate the total amount for each medicine and add to the overall total
	                double medicineTotal = order.getQuantity() * order.getMedicine().getUnitPurchasePrice();
	                detail.setTotalAmount(medicineTotal);
	                totalAmount += medicineTotal;

	                medicineDetails.add(detail);
	            }

	            // Create and populate the Payment entity
	            Payment payment = new Payment();
	            payment.setVendorId(completedOrders.get(0).getVendor().getId()); // Assuming all orders are for the same vendor
	            payment.setDate(new Date());
	            payment.setStatus("Pending");
	            payment.setTotalAmount(totalAmount);
	            payment.setMedicineDetails(medicineDetails);

	            // Save the Payment entity
	            Payment savedPayment = paymentServiceImpl.savePayment(payment);

	            // Return the saved Payment entity
	            return ResponseEntity.ok(savedPayment);
	        } catch (Exception e) {
	            // Handle exceptions and return a 500 Internal Server Error response
	            return ResponseEntity.status(500).body(null);
	        }
	    }
	 
	 @PutMapping("/update-status/{vendorId}")
	    public ResponseEntity<List<Payment>> updatePaymentStatus(@PathVariable Long vendorId) {
	        try {
	            // Update the status of payments for the given vendor
	            List<Payment> updatedPayments = paymentServiceImpl.updatePaymentStatusByVendorId(vendorId);

	            // Return the updated payments as a response
	            return ResponseEntity.ok(updatedPayments);
	        } catch (Exception e) {
	            // Handle exceptions and return a 500 Internal Server Error response
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
	        }
	    }
}

