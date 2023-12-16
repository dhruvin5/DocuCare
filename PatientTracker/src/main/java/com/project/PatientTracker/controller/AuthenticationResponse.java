package com.project.PatientTracker.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.project.PatientTracker.model.Myuser;
import com.project.PatientTracker.model.Doctor;
import com.project.PatientTracker.model.Patient;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

  private String token;
  private String type; 
  private Integer userId;
  // private Doctor doctor; 
  // private Patient patient;

}