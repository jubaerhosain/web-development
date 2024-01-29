package com.course.course.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.course.course.dto.CourseDTO;
import com.course.course.entities.Course;
import com.course.course.services.CourseService;
import com.course.course.utils.GenericResponse;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/courses")
public class CourseController {

	private CourseService courseService;

	public CourseController(@Qualifier("Impl2") CourseService courseService) {
		this.courseService = courseService;
	}

	@GetMapping(value = "/{courseId}")
	public ResponseEntity<GenericResponse<Course>> getOneCourse(@PathVariable long courseId) {
		try {
			Course course = this.courseService.getOneCourse(courseId);
			return ResponseEntity.ok(GenericResponse.success("Course retrieved successfully", course));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(GenericResponse.error("Error retrieving course", null));
		}
	}

	@GetMapping
	public ResponseEntity<GenericResponse<List<Course>>> getAllCourse() {
		try {
			List<Course> courses = this.courseService.getAllCourse();
			return ResponseEntity.ok(GenericResponse.success("All Courses are retrieved successfully", courses));
		} catch (Exception e) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(GenericResponse.error("Error retrieving courses", null));
		}
	}

	@PostMapping(consumes = "application/json")
	public void addOneCourse(@Valid @RequestBody Course course) {
		this.courseService.addOneCourse(course);
	}

	@PutMapping(path = "/{courseId}", consumes = "application/json")
	public void updateOneCourse(@PathVariable long courseId, @RequestBody Course course) {
		this.courseService.updateOneCourse(courseId, course);
	}

	@DeleteMapping("/{courseId}")
	public void deleteOneCourse(@PathVariable long courseId) {
		this.courseService.deleteOneCourse(courseId);

	}

	@PostMapping("/validator-test")
	public void validatorTesting(@Valid @RequestBody CourseDTO courseDTO) {
		System.out.println(courseDTO);
	}
}
