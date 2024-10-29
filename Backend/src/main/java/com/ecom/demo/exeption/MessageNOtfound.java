 package com.ecom.demo.exeption;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)

public class MessageNOtfound extends RuntimeException{

	private static final long serialVersionUID = 1L;
	
  public MessageNOtfound(String message) {
	   super(message);
  }
}
