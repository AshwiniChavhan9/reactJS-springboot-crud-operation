package com.example.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="courses")
public class Course {
	
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
private int id;

@Column(name="name")
private String name;

@Column(name="description")
private String description;

@Column(name="fee")
private float fee;


public Course() {	
}


public Course(int id, String name, String description, float fee) {
	super();
	this.id = id;
	this.name = name;
	this.description = description;
	this.fee = fee;
}


public Course(String name, String description, float fee) {
	super();
	this.name = name;
	this.description = description;
	this.fee = fee;
}


public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getDescription() {
	return description;
}
public void setDescription(String description) {
	this.description = description;
}
public float getFee() {
	return fee;
}
public void setFee(float fee) {
	this.fee = fee;
}

}
