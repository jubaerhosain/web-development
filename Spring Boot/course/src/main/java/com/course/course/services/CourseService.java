package com.course.course.services;

import java.util.List;
import java.util.Optional;

import com.course.course.dto.CourseDTO;
import com.course.course.entities.Course;

public interface CourseService {
	Course getOneCourse(long courseId);

	List<Course> getAllCourse();

	void addOneCourse(Course course);

	void updateOneCourse(long courseId, Course course);

	void deleteOneCourse(long courseId);

}
