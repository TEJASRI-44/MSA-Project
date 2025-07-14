package com.bharath.msa.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bharath.msa.entity.Sales;

public interface SalesRepository extends JpaRepository<Sales, Long> {
	
	 List<Sales> findBySaleDateBetween(Date startDate, Date endDate);

}
