package com.ecom.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecom.demo.model.Contactus;

@Repository
public interface ContactRepository extends JpaRepository<Contactus, Long> {

}
