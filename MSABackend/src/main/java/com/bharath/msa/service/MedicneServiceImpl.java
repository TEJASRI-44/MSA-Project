//package com.bharath.msa.service;
//
//import java.util.List;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Service;
//
//import com.bharath.msa.entity.Medicine;
//import com.bharath.msa.repository.MedicineRepository;
//
//@Service
//
//public class MedicneServiceImpl implements MedicineService {
//
//	@Autowired
//	MedicineRepository medicineRepository;
//	@Override
//    public Medicine addMedicine(Medicine medicine) {
//        return medicineRepository.save(medicine);
//    }
//	@Override
//	public List<Medicine> getMedicines() {
//		// TODO Auto-generated method stub
//		return medicineRepository.findAll();
//	}
//	@Override
//	public void deletemedicineById(Long medicineId) {
//		// TODO Auto-generated method stub
//		medicineRepository.deleteById(medicineId);
//		
//	}
//	@Override
//	public ResponseEntity<Void> deleteMedicine(Long id) {
//		// TODO Auto-generated method stub
//		if(!medicineRepository.existsById(id)) {
//			return ResponseEntity.notFound().build();
//		}
//		medicineRepository.deleteById(id);
//		return ResponseEntity.noContent().build();
//	}
//	@Override
//	public ResponseEntity<Medicine> updateMedicine(Long id, Medicine medicine) {
//		// TODO Auto-generated method stub
//		if(!medicineRepository.existsById(id)) {
//			return  ResponseEntity.notFound().build();
//		}
//		medicineRepository.deleteById(id);
//		medicine.setId(id);
//		Medicine updatedMedicine =medicineRepository.save(medicine);
//		return ResponseEntity.ok(updatedMedicine);
//	}
//
//	
//
//}
