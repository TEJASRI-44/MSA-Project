package com.bharath.msa.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.bharath.msa.entity.Medicines;
import com.bharath.msa.repository.MedicinesRepository;

@Service
public class MedicinesServiceImpl {
	
	@Autowired
	MedicinesRepository medicinesRepository;

	public Medicines addMedicine(Medicines medicine) {
		// TODO Auto-generated method stub
		medicinesRepository.save(medicine);
		return null;
	}
	
	public List<Medicines> addMedicines(List<Medicines> medicinesList) {
	    return medicinesRepository.saveAll(medicinesList);
	}


	
	public List<Medicines> getMedicines() {
		// TODO Auto-generated method stub
		return medicinesRepository.findAll();
	}	
	public ResponseEntity<Void> deleteMedicine(Long id) {
        // Check if the medicine exists by the provided ID
        if (medicinesRepository.existsById(id)) {
            // If it exists, delete it
            medicinesRepository.deleteById(id);
            // Return a 204 No Content response if deletion is successful
            return ResponseEntity.noContent().build();
        }
        // Return a 404 Not Found response if the medicine does not exist
        return ResponseEntity.notFound().build();
    }


//	public ResponseEntity<Medicines> updateMedicine(Long id, Medicines medicine) {
//		// TODO Auto-generated method stub
//		if(!medicinesRepository.existsById(id)) {
//			return  ResponseEntity.notFound().build();
//		}
//		medicinesRepository.deleteById(id);
//		medicine.setId(id);
//		Medicine updatedMedicine =medicinesRepository.save(medicine);
//		return ResponseEntity.ok(updatedMedicine);
//	}
	
	public ResponseEntity<Medicines> updateMedicine(Long id, Medicines medicine) {
	    // Check if the medicine exists
	    Optional<Medicines> existingMedicineOpt = medicinesRepository.findById(id);
	    if (existingMedicineOpt.isEmpty()) {
	        return ResponseEntity.notFound().build(); // Return 404 if not found
	    }

	    Medicines existingMedicine = existingMedicineOpt.get();

	    // Update fields from the new medicine object, while keeping old values where new ones are null or not provided
	    existingMedicine.setTradeName(medicine.getTradeName() != null ? medicine.getTradeName() : existingMedicine.getTradeName());
	    existingMedicine.setGenericName(medicine.getGenericName() != null ? medicine.getGenericName() : existingMedicine.getGenericName());
	    existingMedicine.setUnitSellingPrice(medicine.getUnitSellingPrice() != null ? medicine.getUnitSellingPrice() : existingMedicine.getUnitSellingPrice());
	    existingMedicine.setUnitPurchasePrice(medicine.getUnitPurchasePrice() != null ? medicine.getUnitPurchasePrice() : existingMedicine.getUnitPurchasePrice());
	    existingMedicine.setCode(medicine.getCode() != null ? medicine.getCode() : existingMedicine.getCode());
	    existingMedicine.setQuantity(medicine.getQuantity() != null ? medicine.getQuantity() : existingMedicine.getQuantity());
	    existingMedicine.setExpiryDate(medicine.getExpiryDate() != null ? medicine.getExpiryDate() : existingMedicine.getExpiryDate());
	    existingMedicine.setImageUrl(medicine.getImageUrl() != null ? medicine.getImageUrl() : existingMedicine.getImageUrl());

	    // Save the updated entity
	    Medicines updatedMedicine = medicinesRepository.save(existingMedicine);

	    // Return the updated entity with a 200 OK status
	    return ResponseEntity.ok(updatedMedicine);
	}
	
	public List<Medicines> findMedicinesBelowThreshold(Double thresholdQuantity) {
        return medicinesRepository.findByQuantityLessThan(thresholdQuantity);
    }


}
