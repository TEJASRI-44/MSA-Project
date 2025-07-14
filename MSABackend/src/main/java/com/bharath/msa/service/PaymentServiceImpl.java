package com.bharath.msa.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bharath.msa.entity.Payment;
import com.bharath.msa.repository.PaymentRepository;

@Service
public class PaymentServiceImpl {

	  @Autowired
	    private PaymentRepository paymentRepository;

	   
	    public Payment savePayment(Payment payment) {
	        // Save the Payment entity to the database using the repository
	        return paymentRepository.save(payment);
	    }


		public List<Payment> getAllPayments() {
			// TODO Auto-generated method stub
			return paymentRepository.findAll();
		}


		public List<Payment> updatePaymentStatusByVendorId(Long vendorId) {
			 List<Payment> payments = paymentRepository.findByVendorId(vendorId);

		        // Update the status of each payment to "Completed"
		        for (Payment payment : payments) {
		            payment.setStatus("Completed");
		        }

		        // Save and return the updated payments
		        return paymentRepository.saveAll(payments);
		}
}
