package com.bharath.msa.entity;

public class MedicineReportDTO {

    private String medicineName;
    private Double quantitySold;
    private Double totalAmount;
    private Double totalProfit;

    public MedicineReportDTO(String medicineName, Double quantitySold, Double totalAmount, Double totalProfit) {
        this.medicineName = medicineName;
        this.quantitySold = quantitySold;
        this.totalAmount = totalAmount;
        this.totalProfit = totalProfit;
    }

    // Getters and Setters

    public String getMedicineName() {
        return medicineName;
    }

    public void setMedicineName(String medicineName) {
        this.medicineName = medicineName;
    }

    public Double getQuantitySold() {
        return quantitySold;
    }

    public void setQuantitySold(Double quantitySold) {
        this.quantitySold = quantitySold;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public Double getTotalProfit() {
        return totalProfit;
    }

    public void setTotalProfit(Double totalProfit) {
        this.totalProfit = totalProfit;
    }
}
