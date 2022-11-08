package com.marcelo.api.resources;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.marcelo.api.DTO.AlertLocationDTO;
import com.marcelo.api.entities.AlertLocation;
import com.marcelo.api.services.AlertLocationService;

@RestController
@RequestMapping(value = "/alert")
public class RepositoryResource {

	@Autowired
	private AlertLocationService service;
	
	@GetMapping
	public ResponseEntity<List<AlertLocation>> findAll(){
		List<AlertLocation> response = service.getAll();
		return ResponseEntity.ok().body(response);
	}
	
	@PostMapping
	public ResponseEntity<AlertLocationDTO> insert(@RequestBody AlertLocationDTO dto){
		dto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(dto.getId()).toUri();
		return ResponseEntity.created(uri).body(dto);
	}
	
//	@PutMapping
//	public ResponseEntity<AlertLocationDTO> update(@RequestBody AlertLocationDTO dto){
//		dto = service.update(dto);
//		return ResponseEntity.ok().body(dto);
//	}
}
