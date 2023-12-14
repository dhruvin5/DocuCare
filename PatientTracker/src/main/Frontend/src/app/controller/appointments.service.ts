import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {

  private apiUrl = 'http://localhost:8080'; // Replace with your backend API URL

  constructor(private http: HttpClient) { }

  getAllSpecialization(): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/api/doctors/specialties`);
  }

  getDoctorsofSpecialization(specialization:string): Observable<any> {
    
    return this.http.get(`${this.apiUrl}/api/doctors/specialty/${specialization}`);
  }

  bookAppointment(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/data`, data);
  }
}
