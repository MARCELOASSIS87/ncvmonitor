package com.marcelo.api.DTO;

import com.marcelo.api.entities.AlertLocation;

public class AlertLocationDTO {
	
	private Long id;
	private String name;
	private String lastName;
	private String location;
	
	public AlertLocationDTO() {
	}
	
	public AlertLocationDTO(String name, String lastName, String location) {
		this.name = name;
		this.lastName = lastName;
		this.location = location;
	}
	
	public AlertLocationDTO(AlertLocation alert) {
		this.id = alert.getId();
		this.name = alert.getName();
		this.lastName = alert.getLastName();
		this.location = alert.getLocation();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
	
	

}
