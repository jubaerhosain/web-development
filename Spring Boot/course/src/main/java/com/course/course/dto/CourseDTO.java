package com.course.course.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class CourseDTO {
	@NotNull
	private long courseId;

	@NotEmpty
	private String title;

	@NotEmpty
	@Size(min = 5)
	private String description;

	public CourseDTO(long courseId, String title, String description) {
		this.courseId = courseId;
		this.title = title;
		this.description = description;
	}

	@Override
	public String toString() {
		return "CourseDTO [courseId=" + courseId + ", title=" + title + ", description=" + description + "]";
	}

	public long getCourseId() {
		return courseId;
	}

	public void setCourseId(long courseId) {
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
