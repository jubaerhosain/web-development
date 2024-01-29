package com.course.course.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.course.course.entities.Course;
import com.course.course.repositories.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService {

	private CourseRepository courseRepository;

	public CourseServiceImpl(CourseRepository courseRepository) {
		this.courseRepository = courseRepository;
	}

	@Override
	public Course getOneCourse(long courseId) {
		return this.courseRepository.findById(courseId).orElse(null);
	}

	@Override
	public List<Course> getAllCourse() {
		List<Course> courseList = this.courseRepository.findAll();
		return courseList;
	}

	@Override
	public void addOneCourse(Course course) {
		this.courseRepository.save(course);
	}

	@Override
	public void updateOneCourse(long courseId, Course course) {

	}

	@Override
	public void deleteOneCourse(long courseId) {
		this.courseRepository.deleteById(courseId);

	}

}
