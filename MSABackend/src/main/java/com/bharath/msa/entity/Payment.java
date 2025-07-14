package com.bharath.msa.entity;

import java.util.Date;
import java.util.List;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Embeddable;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long vendorId;
    private Date date;
    private String status;
    private Double totalAmount;

    @ElementCollection
    private List<MedicineDetail> medicineDetails;

    // Getters and Setters

    @Embeddable
    public static class MedicineDetail {
        private Long medicineId;
        private String tradeName;
        private int quantityOrdered;
        private Double unitSellingPrice;
        private Double totalAmount;
		public Long getMedicineId() {
			return medicineId;
		}
		public void setMedicineId(Long medicineId) {
			this.medicineId = medicineId;
		}
		public String getTradeName() {
			return tradeName;
		}
		public void setTradeName(String tradeName) {
			this.tradeName = tradeName;
		}
		public int getQuantityOrdered() {
			return quantityOrdered;
		}
		public void setQuantityOrdered(int quantityOrdered) {
			this.quantityOrdered = quantityOrdered;
		}
		public Double getUnitSellingPrice() {
			return unitSellingPrice;
		}
		public void setUnitSellingPrice(Double unitSellingPrice) {
			this.unitSellingPrice = unitSellingPrice;
		}
		public Double getTotalAmount() {
			return totalAmount;
		}
		public void setTotalAmount(Double totalAmount) {
			this.totalAmount = totalAmount;
		}
		@Override
		public String toString() {
			return "MedicineDetail [medicineId=" + medicineId + ", tradeName=" + tradeName + ", quantityOrdered="
					+ quantityOrdered + ", unitSellingPrice=" + unitSellingPrice + ", totalAmount=" + totalAmount + "]";
		}
		public MedicineDetail(Long medicineId, String tradeName, int quantityOrdered, Double unitSellingPrice,
				Double totalAmount) {
			super();
			this.medicineId = medicineId;
			this.tradeName = tradeName;
			this.quantityOrdered = quantityOrdered;
			this.unitSellingPrice = unitSellingPrice;
			this.totalAmount = totalAmount;
		}
		public MedicineDetail() {
			super();
			// TODO Auto-generated constructor stub
		}

        // Getters and Setters
    }

}
