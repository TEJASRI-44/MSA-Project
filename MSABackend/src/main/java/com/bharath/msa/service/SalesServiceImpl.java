package com.bharath.msa.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.bharath.msa.entity.MedicineReportDTO;
import com.bharath.msa.entity.Medicines;
import com.bharath.msa.entity.Sales;
import com.bharath.msa.repository.MedicinesRepository;
import com.bharath.msa.repository.SalesRepository;


@Service
public class SalesServiceImpl {
	
	@Autowired
	SalesRepository salesRepository;
	
	
	   @Autowired
	    private MedicinesRepository medicinesRepository;
	
//	  public Sales addSales(Sales sale) {
//	        // Calculate totalAmount based on quantity and medicine's unitSellingPrice
//	        sale.setTotalAmount(sale.getQuantity() * sale.getMedicine().getUnitSellingPrice());
//	        return salesRepository.save(sale);
//	    }
	   
	   @PostMapping("/sales")
	   public ResponseEntity<Sales> addSales(@RequestBody Sales sales) {
	       Optional<Medicines> medicineOpt = medicinesRepository.findById(sales.getMedicine().getId());

	       if (medicineOpt.isPresent()) {
	           sales.setMedicine(medicineOpt.get());
	           sales.calculateTotalAmount();

	           // Save the Sales object to the repository
	           Sales savedSales = salesRepository.save(sales);
	           return ResponseEntity.status(HttpStatus.CREATED).body(savedSales);
	       } else {
	           return ResponseEntity.badRequest().body(null); // Medicine not found
	       }
	   }



	  
//	 @Transactional
//	    public Sales addSales(Sales sale) {
//	        sale.calculateTotalAmount();
//	        return salesRepository.save(sale);
//	    }

	public List<Sales> getSales() {
		// TODO Auto-generated method stub
		return salesRepository.findAll();
	}
	
	public Optional<Sales> getSaleById(Long id) {
        return salesRepository.findById(id);
    }
	

//	 public ResponseEntity<Sales> updateSale(Long id, Sales sale) {
//	        // Check if the sales record exists
//	        Optional<Sales> existingSaleOpt = salesRepository.findById(id);
//	        if (existingSaleOpt.isEmpty()) {
//	            return ResponseEntity.notFound().build(); // Return 404 if not found
//	        }
//
//	        Sales existingSale = existingSaleOpt.get();
//
//	        // Update fields from the new sale object, while keeping old values where new ones are null or not provided
//	        existingSale.setQuantity(sale.getQuantity() > 0 ? sale.getQuantity() : existingSale.getQuantity());
//	        existingSale.setSaleDate(sale.getSaleDate() != null ? sale.getSaleDate() : existingSale.getSaleDate());
//
//	        // If the medicine ID is provided, fetch the medicine and update total amount
//	        if (sale.getMedicine() != null && sale.getMedicine().getId() != null) {
//	            Medicines medicine = medicinesRepository.findById(sale.getMedicine().getId())
//	                .orElseThrow(() -> new RuntimeException("Medicine not found"));
//	            
//	            // Recalculate total amount based on the updated quantity and medicine's selling price
//	            existingSale.setMedicine(medicine); // Update medicine reference
//	            existingSale.setTotalAmount(medicine.getUnitSellingPrice() * existingSale.getQuantity());
//	        }
//
//	        // Save the updated entity
//	        Sales updatedSale = salesRepository.save(existingSale);
//
//	        // Return the updated entity with a 200 OK status
//	        return ResponseEntity.ok(updatedSale);
//	    }
	
	@Transactional
	public Sales updateSale(Long id, Sales saleDetails) {
	    return salesRepository.findById(id).map(sale -> {
	        // Update only if the value is provided (not null)
	        sale.setQuantitySold(saleDetails.getQuantitySold() > 0 ? saleDetails.getQuantitySold() : sale.getQuantitySold());
	        sale.setSaleDate(saleDetails.getSaleDate() != null ? saleDetails.getSaleDate() : sale.getSaleDate());

	        // Update medicine if provided
	        if (saleDetails.getMedicine() != null && saleDetails.getMedicine().getId() != null) {
	            Medicines medicine = medicinesRepository.findById(saleDetails.getMedicine().getId())
	                .orElseThrow(() -> new RuntimeException("Medicine not found"));
	            sale.setMedicine(medicine);
	        }

	        // Calculate total amount based on updated fields
	        sale.calculateTotalAmount();
	        return salesRepository.save(sale);
	    }).orElseThrow(() -> new RuntimeException("Sale not found with id " + id));
	}


	public void deleteSale(Long id) {
	    if (salesRepository.existsById(id)) {
	        salesRepository.deleteById(id);
	    } else {
	        throw new RuntimeException("Sale not found with id " + id);
	    }
	}
	
	public Long generateReport(Date startDate, Date endDate) {
	    double sum = 0;
	    List<Sales> sales = salesRepository.findBySaleDateBetween(startDate, endDate);
	    
	    for (Sales sale : sales) {
	        sum += sale.getTotalAmount();
	    }
	    
	    return (long) sum;
	}
	
	public List<MedicineReportDTO> generateMedicineReport(Date startDate, Date endDate) {
        List<Sales> sales = salesRepository.findBySaleDateBetween(startDate, endDate);
        Map<Long, MedicineReportDTO> medReport = new HashMap<>();

        for (Sales sale : sales) {
            Long code = sale.getMedicine().getId();
            String medicineName = sale.getMedicine().getTradeName();
            Double quantitySold = (double) sale.getQuantitySold();
            Double unitSellingPrice = sale.getMedicine().getUnitSellingPrice();
            Double unitPurchasePrice = sale.getMedicine().getUnitPurchasePrice();
            Double totalAmount = unitSellingPrice * quantitySold;
            Double profit = (unitSellingPrice - unitPurchasePrice) * quantitySold;

            medReport.computeIfAbsent(code, k -> new MedicineReportDTO(medicineName, 0.0, 0.0, 0.0));

            MedicineReportDTO reportData = medReport.get(code);
            reportData.setQuantitySold(reportData.getQuantitySold() + quantitySold);
            reportData.setTotalAmount(reportData.getTotalAmount() + totalAmount);
            reportData.setTotalProfit(reportData.getTotalProfit() + profit);
        }

        return new ArrayList<>(medReport.values());
    }


	public long viewProfit(Date startDate, Date endDate) {
	    // Step 1: Get total sales amount
	    Long result = generateReport(startDate, endDate);
	    System.out.println("Total Sales Amount (Revenue): " + result);

	    // Step 2: Initialize total purchase cost
	    double total_purchase = 0;
	    List<Sales> sales = salesRepository.findBySaleDateBetween(startDate, endDate);

	    // Step 3: Calculate total purchase cost
	    for (Sales sale : sales) {
	        Double quantitySold = (double) sale.getQuantitySold(); // Use quantity sold in this sale
	        Double unitPurchasePrice = sale.getMedicine().getUnitPurchasePrice();
	        total_purchase += unitPurchasePrice * quantitySold;
	        System.out.println("Quantity Sold: " + quantitySold + ", Unit Purchase Price: " + unitPurchasePrice + ", Subtotal: " + (unitPurchasePrice * quantitySold));
	    }

	    System.out.println("Total Purchase Cost: " + total_purchase);

	    // Step 4: Calculate profit
	    double profit = result - total_purchase;
	    System.out.println("Calculated Profit: " + profit);

	    return (long) profit;
	}


	 
	 
}
