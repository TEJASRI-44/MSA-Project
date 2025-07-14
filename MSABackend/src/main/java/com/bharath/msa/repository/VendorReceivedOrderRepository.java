package com.bharath.msa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharath.msa.entity.VendorReceivedOrder;

@Repository
public interface VendorReceivedOrderRepository extends JpaRepository<VendorReceivedOrder, Long>{

    List<VendorReceivedOrder> findByVendorIdAndStatus(Long vendorId, String status);
    List<VendorReceivedOrder> findByVendorId(Long vendorId);

}
