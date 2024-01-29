package com.course.course.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

// CourseEntity

@Entity
public class Course {
	@Id
	@NotEmpty
	@Digits(integer = Integer.MAX_VALUE, fraction = 0, message = "Must be a number")
	private String courseId;

	@NotEmpty
	private String title;

	@NotEmpty
	@Size(min = 5)
	private String description;

	public Course(String courseId, String title, String description) {
		super();
		this.courseId = courseId;
		this.title = title;
		this.description = description;
	}

	public Course() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getCourseId() {
		return courseId;
	}

	public void setCourseId(String courseId) {
		this.courseId = courseId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

}
