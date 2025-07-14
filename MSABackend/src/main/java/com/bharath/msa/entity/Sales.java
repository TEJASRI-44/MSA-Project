package com.bharath.msa.entity;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Sales {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "medicine_id")
    private Medicines medicine;

    private int quantitySold;
    private Date saleDate;
    private Double totalAmount;

    // Getters and Setters
    
    public void calculateTotalAmount() {
    	System.out.println("Medicine: " + medicine);
    	System.out.println("Unit Selling Price: " + medicine.getUnitSellingPrice());
        if (medicine != null && medicine.getUnitSellingPrice() != null) {
            this.setTotalAmount(this.quantitySold * medicine.getUnitSellingPrice());
        } else {
            throw new RuntimeException("Medicine or unit selling price is missing");
        }
    }

	public Date getSaleDate() {
		return saleDate;
	}

	public void setSaleDate(Date saleDate) {
		this.saleDate = saleDate;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
	}
    
    
}
