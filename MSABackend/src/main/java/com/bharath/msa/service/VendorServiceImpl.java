package com.bharath.msa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bharath.msa.entity.Vendor;
import com.bharath.msa.repository.VendorRepository;

@Service
public class VendorServiceImpl {
	
	@Autowired
	VendorRepository vendorRepository;

	public  Vendor addVendor(Vendor vendor) {
		// TODO Auto-generated method stub
		return vendorRepository.save(vendor);
	}

	public List<Vendor> getVendors() {
		// TODO Auto-generated method stub
		return vendorRepository.findAll();
	}

	public ResponseEntity<Vendor> updateVendor(Long id, Vendor vendor) {
	    // Check if the vendor exists
	    Optional<Vendor> existingVendorOpt = vendorRepository.findById(id);
	    if (existingVendorOpt.isEmpty()) {
	        return ResponseEntity.notFound().build(); // Return 404 if not found
	    }

	    Vendor existingVendor = existingVendorOpt.get();

	    // Update fields from the new vendor object, while keeping old values where new ones are null or not provided
	    existingVendor.setName(vendor.getName() != null ? vendor.getName() : existingVendor.getName());
	    existingVendor.setAddress(vendor.getAddress() != null ? vendor.getAddress() : existingVendor.getAddress());
	    existingVendor.setContactNumber(vendor.getContactNumber() != null ? vendor.getContactNumber() : existingVendor.getContactNumber());

	    // Save the updated entity
	    Vendor updatedVendor = vendorRepository.save(existingVendor);

	    // Return the updated entity with a 200 OK status
	    return ResponseEntity.ok(updatedVendor);
	}

	public ResponseEntity<Void> deleteVendor(Long id) {
	    // Check if the vendor exists
	    Optional<Vendor> existingVendorOpt = vendorRepository.findById(id);
	    
	    if (existingVendorOpt.isEmpty()) {
	        // Return 404 Not Found if the vendor doesn't exist
	        return ResponseEntity.notFound().build();
	    }

	    // Delete the vendor if it exists
	    vendorRepository.deleteById(id);

	    // Return 204 No Content to indicate successful deletion
	    return ResponseEntity.noContent().build();
	}

}
