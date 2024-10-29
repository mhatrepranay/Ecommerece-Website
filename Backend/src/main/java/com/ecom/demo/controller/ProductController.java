 

package com.ecom.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.demo.exeption.ProductNotFound;
import com.ecom.demo.model.Product;
import com.ecom.demo.repository.ProductRepository;

 

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v0/")

public class ProductController {

	@Autowired
		 private ProductRepository productRepository;
	
	//get all products details 
	
 	@GetMapping("/products")
 	public List<Product> getAllProduct(){
 	return productRepository.findAll();
 	}
 	
	//Add Product
 	
 	@PostMapping("/products")
 	public Product createProduct(@RequestBody Product product) {
 		return productRepository.save(product);
 	}
	
 	
 // Find by id
 	@GetMapping("/products/{id}")
 	public ResponseEntity<Product> getProduct(@PathVariable Long id)	{
 		Product product =  productRepository.findById(id)
 .orElseThrow(() -> new ProductNotFound("Product not Found :" +id));
 		return ResponseEntity.ok(product);
 				
 	}
 	
 	
	//update emp api
	
	
	@PutMapping("/products/{id}")
	public ResponseEntity<Product> updateProduct(@PathVariable Long id,@RequestBody Product productDetails){
		
		Product product = productRepository.findById(id)
				.orElseThrow(() -> new ProductNotFound("Product not Found :" +id));					
		product.setId(productDetails.getId());
						product.setProductName(productDetails.getProductName());
						product.setDescription(productDetails.getDescription());
						product.setSpec1(productDetails.getSpec1());
						product.setSpec2(productDetails.getSpec2());
						product.setSpec3(productDetails.getSpec3());
						product.setSpec4(productDetails.getSpec4());
						product.setSpec5(productDetails.getSpec5());
						product.setSpec6(productDetails.getSpec6());
						product.setSpec7(productDetails.getSpec7());
						product.setSpec8(productDetails.getSpec8());
						product.setGenCode(productDetails.getGenCode());
						
						Product updatedProduct =productRepository.save(product);
						return ResponseEntity.ok(updatedProduct);
	}
	
	
	//Find by code 
	
	@GetMapping("/products/genCode")
	public ResponseEntity<Product> getProductByGenCode(@RequestParam String genCode) {
		Product product = productRepository.findByGenCode(genCode)
	        .orElseThrow(() -> new ProductNotFound("Product not Found with codeGen: " + genCode));
	    return ResponseEntity.ok(product);
	}
	
	
}

