package com.course.course.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.course.course.entities.Course;

@Repository
public interface CourseRepository extends JpaRepository<Course, String> {

}
