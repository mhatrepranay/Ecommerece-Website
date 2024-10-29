 
package com.ecom.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecom.demo.model.Contactus;
import com.ecom.demo.repository.ContactRepository;
 

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v0/")

public class ContactUsController {

	@Autowired
		private ContactRepository contactRepository;
	
	//get all mesages 
	
	@GetMapping("/msges")
	public List<Contactus> getallMsges(){
		return contactRepository.findAll();
	}
	 
	//contact us msgs
	
	@PostMapping("/msges")
	public Contactus saveMsg(@RequestBody Contactus contactus ) {
		return contactRepository.save(contactus);
	}
	
	 
	
	
	
	
	
}

