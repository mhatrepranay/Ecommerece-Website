package com.ecom.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecom.demo.model.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
	  Optional<Product>findByGenCode(String genCode);
}
