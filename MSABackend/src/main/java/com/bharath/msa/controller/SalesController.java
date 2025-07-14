package com.bharath.msa.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bharath.msa.entity.MedicineReportDTO;
import com.bharath.msa.entity.Sales;
import com.bharath.msa.service.SalesServiceImpl;


@RestController
//@CrossOrigin("http://localhost:3000/")
public class SalesController {
	
	@Autowired
	SalesServiceImpl salesServiceImpl;

	@PostMapping("/sale/addsale")
	public ResponseEntity<Sales> addSales(@RequestBody Sales sale) {
		//TODO: process POST request
		
		return salesServiceImpl.addSales(sale);
	}
	
	@GetMapping("/sales")
	public List<Sales> getSales() {
		return salesServiceImpl.getSales();
	}
	
	 @GetMapping("/sale/{id}")
	    public ResponseEntity<Sales> getSaleById(@PathVariable Long id) {
	        return salesServiceImpl.getSaleById(id)
	                .map(ResponseEntity::ok)
	                .orElse(ResponseEntity.notFound().build());
	 }
	    
	
	 @PutMapping("/sale/{id}")
	 public ResponseEntity<Sales> updateSale(@PathVariable Long id, @RequestBody Sales sale) {
	     try {
	         Sales updatedSale = salesServiceImpl.updateSale(id, sale);
	         return ResponseEntity.ok(updatedSale);
	     } catch (RuntimeException e) {
	         return ResponseEntity.notFound().build();
	     }
	 }

	
	
	 @DeleteMapping("/sale/{id}")
	 public ResponseEntity<?> deleteSale(@PathVariable Long id) {
	     try {
	         salesServiceImpl.deleteSale(id);
	         return ResponseEntity.noContent().build(); // 204 No Content for successful deletion
	     } catch (RuntimeException e) {
	         return ResponseEntity.notFound().build(); // 404 Not Found if the sale doesn't exist
	     }
	 }
	 
	 @PutMapping("/sale/report/{startDate}/{endDate}")
	 public long generateReport( @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
			    @PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate){
		 
		 Long result=salesServiceImpl.generateReport(startDate,endDate);
		 return  result;
	 }
	 
	 @PutMapping("/sale/profit")
	 public long viewProfit(
	     @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
	     @RequestParam @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
	     return salesServiceImpl.viewProfit(startDate, endDate);
	 }
	 
	 
	 @GetMapping("/sales/medicineReport")
	    public List<MedicineReportDTO> getMedicineReport(
	            @RequestParam("startDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date startDate,
	            @RequestParam("endDate") @DateTimeFormat(pattern = "yyyy-MM-dd") Date endDate) {
	        
	        return salesServiceImpl.generateMedicineReport(startDate, endDate);
	    }



	
	
}
