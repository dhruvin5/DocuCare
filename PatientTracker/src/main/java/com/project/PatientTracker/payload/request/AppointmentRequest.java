package com.project.PatientTracker.payload.request;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.experimental.Accessors;

@Accessors(chain = true)
public class AppointmentRequest {
    
    @NotBlank
    @Getter
    private Long doctorId;

    @NotBlank
    @Getter
    private Long patientId;

    @NotBlank
    @Getter
    @JsonFormat(pattern="yyyy-MM-dd HH:mm:ss")
    private Date time;

    @NotBlank
    @Getter
    private String purpose;

    @NotBlank
    @Getter
    private String status;
    
    @Getter
    private String notes;
}
