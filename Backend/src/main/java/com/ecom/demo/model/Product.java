package com.ecom.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="Product_details")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name")
	private String productName;

	@Column(name = "description")
	private String description; // Add a field for product description

	// Add fields for specifications
	@Column(name = "spec1")
	private String spec1;

	@Column(name = "spec2")
	private String spec2;

	@Column(name = "spec3")
	private String spec3;

	@Column(name = "spec4")
	private String spec4;

	@Column(name = "spec5")
	private String spec5;

	@Column(name = "spec6")
	private String spec6;

	@Column(name = "spec7")
	private String spec7;

	@Column(name = "spec8")
	private String spec8;

	@Column(name = "code")
	private String genCode;
	
	
	

	public Product() {
	 
	}




	public Product(String productName, String description, String spec1, String spec2, String spec3, String spec4,
			String spec5, String spec6, String spec7, String spec8, String genCode) {
		super();
		this.productName = productName;
		this.description = description;
		this.spec1 = spec1;
		this.spec2 = spec2;
		this.spec3 = spec3;
		this.spec4 = spec4;
		this.spec5 = spec5;
		this.spec6 = spec6;
		this.spec7 = spec7;
		this.spec8 = spec8;
		this.genCode = genCode;
	}




	public long getId() {
		return id;
	}




	public void setId(long id) {
		this.id = id;
	}




	public String getProductName() {
		return productName;
	}




	public void setProductName(String productName) {
		this.productName = productName;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public String getSpec1() {
		return spec1;
	}




	public void setSpec1(String spec1) {
		this.spec1 = spec1;
	}




	public String getSpec2() {
		return spec2;
	}




	public void setSpec2(String spec2) {
		this.spec2 = spec2;
	}




	public String getSpec3() {
		return spec3;
	}




	public void setSpec3(String spec3) {
		this.spec3 = spec3;
	}




	public String getSpec4() {
		return spec4;
	}




	public void setSpec4(String spec4) {
		this.spec4 = spec4;
	}




	public String getSpec5() {
		return spec5;
	}




	public void setSpec5(String spec5) {
		this.spec5 = spec5;
	}




	public String getSpec6() {
		return spec6;
	}




	public void setSpec6(String spec6) {
		this.spec6 = spec6;
	}




	public String getSpec7() {
		return spec7;
	}




	public void setSpec7(String spec7) {
		this.spec7 = spec7;
	}




	public String getSpec8() {
		return spec8;
	}




	public void setSpec8(String spec8) {
		this.spec8 = spec8;
	}




	public String getGenCode() {
		return genCode;
	}




	public void setGenCode(String genCode) {
		this.genCode = genCode;
	}
	
	
	
	
	
	
	

}
