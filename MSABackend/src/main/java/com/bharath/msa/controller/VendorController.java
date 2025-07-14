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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.bharath.msa.entity.Vendor;
import com.bharath.msa.repository.VendorRepository;
import com.bharath.msa.service.VendorServiceImpl;


@RestController
//@CrossOrigin("http://localhost:3000/")
public class VendorController {
	
	@Autowired
	VendorServiceImpl vendorServiceImpl;
	
	
	@Autowired
    private VendorRepository vendorRepository;

    @GetMapping("/vendor/verify")
    public ResponseEntity<Boolean> verifyVendor(@RequestParam String name, @RequestParam String phoneNumber) {
        boolean exists = vendorRepository.existsByNameAndContactNumber(name, phoneNumber);
        return ResponseEntity.ok(exists);
    }

	@PostMapping("/vendor/addvendor")
	@ResponseStatus(HttpStatus.CREATED)
	public Vendor addVendor(@RequestBody Vendor vendor) {
		//TODO: process POST request
		
		return vendorServiceImpl.addVendor(vendor);
	}
	
	@GetMapping("/vendor")
	public List<Vendor> getVendors() {
		return vendorServiceImpl.getVendors();
	}
	
	@PutMapping("/vendor/{id}")
	public ResponseEntity<Vendor> updateVendor(@PathVariable Long id,@RequestBody Vendor vendor) {
		//TODO: process POST request
		
		return vendorServiceImpl.updateVendor(id,vendor);
	}
	
	@DeleteMapping("/vendor/vendorbyid/{id}")
	public ResponseEntity<Void> deleteMedicine(@PathVariable Long id){
		return vendorServiceImpl.deleteVendor(id);
	}
}
