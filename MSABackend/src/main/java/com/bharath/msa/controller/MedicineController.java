//package com.bharath.msa.controller;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.ResponseStatus;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.bharath.msa.entity.Medicine;
//import com.bharath.msa.service.MedicineService;
//
//
//
//@RestController
//@CrossOrigin("http://localhost:5173/")
//public class MedicineController {
//	
//	@Autowired
//	MedicineService medicineServiceImpl;
//
//	@PostMapping("/medicine/addmedicine")
//	@ResponseStatus(HttpStatus.CREATED)
//	public Medicine addMedicine(@RequestBody Medicine medicine) {
//		//TODO: process POST request
//		
//		return medicineServiceImpl.addMedicine(medicine);
//	}
//	
//	@GetMapping("/medicine")
//	public List<Medicine> getMedicines() {
//		return medicineServiceImpl.getMedicines();
//	}
////	@DeleteMapping("/medicine/medicinebyid/{id}")
////	public String deletemedicineById(@PathVariable("id") Long medicineId) {
////			medicineServiceImpl.deletemedicineById(medicineId);
////		return "Medicine deleted by Succesfully";
////		
////	}
//	
//	@DeleteMapping("/medicine/medicinebyid/{id}")
//	public ResponseEntity<Void> deleteMedicine(@PathVariable Long id){
//		return medicineServiceImpl.deleteMedicine(id);
//	}
//	
//	@PutMapping("/medicine/{id}")
//	public ResponseEntity<Medicine> updateMedicine(@PathVariable Long id,@RequestBody Medicine medicine) {
//		//TODO: process POST request
//		
//		return medicineServiceImpl.updateMedicine(id,medicine);
//	}
//	
//	
//	
//	
//}
