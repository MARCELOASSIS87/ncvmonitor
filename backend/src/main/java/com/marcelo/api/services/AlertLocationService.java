package com.marcelo.api.services;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.marcelo.api.DTO.AlertLocationDTO;
import com.marcelo.api.entities.AlertLocation;
import com.marcelo.api.repositories.AlertLocationRepository;

@Service
public class AlertLocationService {

	@Autowired
	private AlertLocationRepository repository;
	
	@Transactional(readOnly = true)
	public List<AlertLocation> getAll() {
		List<AlertLocation> response = repository.findAll();
		return response;
	}
	
	@Transactional
	public AlertLocationDTO insert(AlertLocationDTO dto) {
		AlertLocation alert = new AlertLocation();
		alert.setName(dto.getName());
		alert.setLastName(dto.getLastName());
		alert.setLocation(dto.getLocation());
		alert = repository.save(alert);
		return new AlertLocationDTO(alert);
		
		
	}
}
