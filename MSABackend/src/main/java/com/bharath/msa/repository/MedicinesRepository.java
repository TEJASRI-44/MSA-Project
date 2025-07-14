package com.bharath.msa.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharath.msa.entity.Medicines;

@Repository
public interface MedicinesRepository  extends JpaRepository<Medicines, Long>{
	
	List<Medicines> findByQuantityLessThan(Double quantity);

}
