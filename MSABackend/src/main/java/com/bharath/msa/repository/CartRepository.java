package com.bharath.msa.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharath.msa.entity.Cart;

@Repository
public interface CartRepository  extends JpaRepository<Cart, Long>{

	List<Cart> findByCustomerId(Long customerId);

	
	 Optional<Cart> findByCustomerIdAndMedicineId(Long customerId, Long medicineId);
}
