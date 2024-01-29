package com.course.course.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.course.course.entities.Course;
import com.course.course.repositories.CourseRepository;

@Service("Impl2")
public class CourseServiceImpl2 implements CourseService {

	private CourseRepository courseRepository;

	public CourseServiceImpl2(CourseRepository courseRepository) {
		this.courseRepository = courseRepository;
		System.out.println("Course Service Implementation 2");
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
