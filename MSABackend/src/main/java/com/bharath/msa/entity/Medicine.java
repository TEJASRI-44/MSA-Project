package com.bharath.msa.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
//@Table(name="medicines")
public class Medicine {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private  String tradeName;
	private String genericName;
	private Double uniteSellingPrice;
	private Double unitPurchasePrice;
	private String code;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTradeName() {
		return tradeName;
	}
	public void setTradeName(String tradeName) {
		this.tradeName = tradeName;
	}
	public String getGenericName() {
		return genericName;
	}
	public void setGenericName(String genericName) {
		this.genericName = genericName;
	}
	public Double getUniteSellingPrice() {
		return uniteSellingPrice;
	}
	public void setUniteSellingPrice(Double uniteSellingPrice) {
		this.uniteSellingPrice = uniteSellingPrice;
	}
	public Double getUnitPurchasePrice() {
		return unitPurchasePrice;
	}
	public void setUnitPurchasePrice(Double unitPurchasePrice) {
		this.unitPurchasePrice = unitPurchasePrice;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
	public Medicine() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Medicine(Long id, String tradeName, String genericName, Double uniteSellingPrice, Double unitPurchasePrice,
			String code) {
		super();
		this.id = id;
		this.tradeName = tradeName;
		this.genericName = genericName;
		this.uniteSellingPrice = uniteSellingPrice;
		this.unitPurchasePrice = unitPurchasePrice;
		this.code = code;
	}
	@Override
	public String toString() {
		return "Medicine [id=" + id + ", tradeName=" + tradeName + ", genericName=" + genericName
				+ ", uniteSellingPrice=" + uniteSellingPrice + ", unitPurchasePrice=" + unitPurchasePrice + ", code="
				+ code + "]";
	}
	
	
	
	

}
