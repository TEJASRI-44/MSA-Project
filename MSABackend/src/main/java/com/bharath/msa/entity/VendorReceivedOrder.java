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
public class VendorReceivedOrder {
	

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "medicine_id")
    private Medicines medicine;

    @ManyToOne
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    private int quantity;
    private Date orderDate;
    private String status;
	public Object getMedicine() {
		// TODO Auto-generated method stub
		return null;
	}

}
