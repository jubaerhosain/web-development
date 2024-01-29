package com.course.course.utils;

public class GenericResponse<T> {
	private boolean success;
	private String message;
	private T data;
	
	private GenericResponse(boolean success, String message, T data) {
		this.success = success;
		this.message = message;
		this.data = data;
	}
	
	public static <T> GenericResponse<T> success(String message, T data) {
        return new GenericResponse<T>(true, message, data);
    }
	
	public static <T> GenericResponse<T> error(String message, T data) {
        return new GenericResponse<T>(false, message, data);
	}
	
	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}
}
