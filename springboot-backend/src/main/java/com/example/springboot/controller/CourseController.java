package com.example.springboot.controller;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.Course;
import com.example.springboot.repository.CourseRepository;
import com.example.springboot.exception.ResourseNotFoundException;


@CrossOrigin(origins = "http://localhost:3000")
	@RestController
	@RequestMapping("/api/v1")
	public class CourseController {

		@Autowired
		private CourseRepository courseRepository;
		
	// get all courses
		@GetMapping("/courses")
		public List<Course> getAllCourses(){
			return courseRepository.findAll();
		
		}
		
		@PostMapping("/courses")
		public Course createCourse(@RequestBody Course course) {
			return courseRepository.save(course);
		}
		
		// get course by id rest api
		@GetMapping("/courses/{id}")
		public ResponseEntity<Course> getCourseById(@PathVariable int id) {
			Course course = courseRepository.findById(id).orElseThrow(() -> new ResourseNotFoundException("Course not exist with id :" + id));
			return ResponseEntity.ok(course);
		}
		
		// update employee rest api
		
		@PutMapping("/courses/{id}")
		public ResponseEntity<Course> updateCourse(@PathVariable int id, @RequestBody Course courseDetails){
			Course course = courseRepository.findById(id)
					.orElseThrow(() -> new ResourseNotFoundException("Course not exist with id :" + id));
			
			course.setName(courseDetails.getName());
			course.setDescription(courseDetails.getDescription());
			course.setFee(courseDetails.getFee());
			
			Course updatedCourse = courseRepository.save(course);
			return ResponseEntity.ok(updatedCourse);
		}
		
		// delete course rest api
		@DeleteMapping("/courses/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteCourse(@PathVariable int id){
			Course course = courseRepository.findById(id)
					.orElseThrow(() -> new ResourseNotFoundException("Course not exist with id :" + id));
			
			courseRepository.delete(course);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}

	}