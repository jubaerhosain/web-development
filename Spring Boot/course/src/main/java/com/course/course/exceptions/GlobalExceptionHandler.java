package com.course.course.exceptions;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.resource.NoResourceFoundException;

import com.course.course.utils.GenericResponse;

@RestControllerAdvice
public class GlobalExceptionHandler {

	@ExceptionHandler(NoResourceFoundException.class)
	public ResponseEntity<GenericResponse<String>> handleNoResourceFoundException(Exception e) {
		return new ResponseEntity<GenericResponse<String>>(GenericResponse.error(e.getMessage(), null),
				HttpStatus.NOT_FOUND);
	}

	@ExceptionHandler(MethodArgumentNotValidException.class)
	public ResponseEntity<GenericResponse<Map<String, String>>> handleException(MethodArgumentNotValidException e) {
		Map<String, String> errors = new HashMap<String, String>();
		e.getBindingResult().getAllErrors().forEach((error) -> {
			String fieldName = ((FieldError) error).getField();
			String errorMessage = error.getDefaultMessage();
			errors.put(fieldName, errorMessage);
		});

		return new ResponseEntity<GenericResponse<Map<String, String>>>(
				GenericResponse.error("Validation failed", errors), HttpStatus.INTERNAL_SERVER_ERROR);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<GenericResponse<String>> handleException(Exception e) {
		System.out.println(e.toString());
		return new ResponseEntity<GenericResponse<String>>(GenericResponse.error(e.getMessage(), null),
				HttpStatus.INTERNAL_SERVER_ERROR);
	}
}
