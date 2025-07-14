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

import com.bharath.msa.entity.Medicines;
import com.bharath.msa.service.MedicinesServiceImpl;

@RestController
//@CrossOrigin("http://localhost:3000/")
public class MedicinesController {
	
	@Autowired
	MedicinesServiceImpl medicinesServiceImpl;
	
	@PostMapping("/medicine/addmedicine")
	@ResponseStatus(HttpStatus.CREATED)
	public Medicines addMedicine(@RequestBody Medicines medicine) {
		//TODO: process POST request
		
		return medicinesServiceImpl.addMedicine(medicine);
	}
	
	@PostMapping("/medicine/addmedicines")
	@ResponseStatus(HttpStatus.CREATED)
	public List<Medicines> addMedicines(@RequestBody List<Medicines> medicinesList) {
	    return medicinesServiceImpl.addMedicines(medicinesList);
	}

	
	@GetMapping("/medicine")
	public List<Medicines> getMedicines() {
		return medicinesServiceImpl.getMedicines();
	}
	
	@DeleteMapping("/medicine/medicinebyid/{id}")
	public ResponseEntity<Void> deleteMedicine(@PathVariable Long id){
		return medicinesServiceImpl.deleteMedicine(id);
	}
	
	@PutMapping("/medicine/{id}")
	public ResponseEntity<Medicines> updateMedicine(@PathVariable Long id,@RequestBody Medicines medicine) {
		//TODO: process POST request
		
		return medicinesServiceImpl.updateMedicine(id,medicine);
	}
	
	
	@GetMapping("/medicines/low-stock")
    public ResponseEntity<List<Medicines>> getMedicinesBelowThreshold(@RequestParam Double thresholdQuantity) {
        List<Medicines> medicines = medicinesServiceImpl.findMedicinesBelowThreshold(thresholdQuantity);
        return ResponseEntity.ok(medicines);
    }

	
	
 
}
