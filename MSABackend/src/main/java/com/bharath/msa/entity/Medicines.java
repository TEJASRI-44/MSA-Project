package com.bharath.msa.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Medicines {
	
		
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private Long id;
		
		private  String tradeName;
		private String genericName;
		private Double unitSellingPrice;
		private Double unitPurchasePrice;
		private String code;
		private Double quantity;
		private Date expiryDate;
		private String imageUrl;
		
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getTradeName() {
			return tradeName;
		}		public void setTradeName(String tradeName) {
			this.tradeName = tradeName;
		}
		public String getGenericName() {
			return genericName;
		}
		public void setGenericName(String genericName) {
			this.genericName = genericName;
		}
		public Double getUnitSellingPrice() {
			return unitSellingPrice;
		}
		public void setUnitSellingPrice(Double uniteSellingPrice) {
/      			this.unitSellingPrice = uniteSellingPrice;
//		}
//		public Double getUnitPurchasePrice() {
//			return unitPurchasePrice;
//		}
//		public void setUnitPurchasePrice(Double unitPurchasePrice) {
//			this.unitPurchasePrice = unitPurchasePrice;
//		}
//		public String getCode() {
//			return code;
//		}
//		public void setCode(String code) {
//			this.code = code;
//		}
//		public Double getQuantity() {
//			return quantity;
//		}
//		public void setQuantity(Double quantity) {
//			this.quantity = quantity;
//		}
//		public Date getExpiryDate() {
//			return expiryDate;
//		}
//		public void setExpiryDate(Date expiryDate) {
//			this.expiryDate = expiryDate;
//		}
//		public String getImageUrl() {
//			return imageUrl;
//		}
//		public void setImageUrl(String imageUrl) {
//			this.imageUrl = imageUrl;
//		}
//		public Medicines() {
//			super();
//			// TODO Auto-generated constructor stub
//		}
//		public Medicines(Long id, String tradeName, String genericName, Double uniteSellingPrice,
//				Double unitPurchasePrice, String code, Double quantity, Date expiryDate, String imageUrl) {
//			super();
//			this.id = id;
//			this.tradeName = tradeName;
//			this.genericName = genericName;
//			this.unitSellingPrice = uniteSellingPrice;
//			this.unitPurchasePrice = unitPurchasePrice;
//			this.code = code;
//			this.quantity = quantity;
//			this.expiryDate = expiryDate;
//			this.imageUrl = imageUrl;
//		}
//		@Override
//		public String toString() {
//			return "Medicines [id=" + id + ", tradeName=" + tradeName + ", genericName=" + genericName
//					+ ", uniteSellingPrice=" + unitSellingPrice + ", unitPurchasePrice=" + unitPurchasePrice
//					+ ", code=" + code + ", quantity=" + quantity + ", expiryDate=" + expiryDate + ", imageUrl="
//					+ imageUrl + "]";
//		}
		
}
		public Object getUnitSellingPrice() {
			// TODO Auto-generated method stub
			return null;
		}

