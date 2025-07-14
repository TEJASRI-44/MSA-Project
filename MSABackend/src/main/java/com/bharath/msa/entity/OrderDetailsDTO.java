package com.bharath.msa.entity;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDetailsDTO {

    private String customerName;
    private String customerEmail;
    private List<OrderItem> items;

    private Double totalAmount;

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public static class OrderItem {
        private String medicineName;
        private int quantity;
        private Double unitPrice;
        private Double totalPrice;
    }

}
