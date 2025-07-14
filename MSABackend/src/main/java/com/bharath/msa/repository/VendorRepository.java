package com.bharath.msa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bharath.msa.entity.Vendor;

@Repository
public interface VendorRepository  extends JpaRepository<Vendor, Long>{
	
	 boolean existsByNameAndContactNumber(String name, String contactNumber);

}
