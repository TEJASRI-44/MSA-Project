package com.bharath.msa.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.bharath.msa.entity.Medicine;

public interface MedicineService {

	public Medicine addMedicine(Medicine medicine);

	public List<Medicine> getMedicines();

	public void deletemedicineById(Long medicineId);

	public ResponseEntity<Void> deleteMedicine(Long id);

	public ResponseEntity<Medicine> updateMedicine(Long id, Medicine medicine);

}
