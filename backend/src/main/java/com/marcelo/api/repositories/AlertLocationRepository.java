package com.marcelo.api.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marcelo.api.entities.AlertLocation;

@Repository
public interface AlertLocationRepository extends JpaRepository<AlertLocation, Long>{

}
