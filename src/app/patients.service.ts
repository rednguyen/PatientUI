import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  patient: Patient;
  
  constructor(
    private http:HttpClient,
  ) { }

  submitForm(firstname: string, lastname: string, address: string, dateofbirth: string, 
    email:string, phone: string, meetingtime: string): Observable<Patient>{
    console.log(phone)
    return this.http.post<Patient>('/api/Patients',
    {
      "firstname": firstname,
      "lastname": lastname,
      "address": address,
      "dateofbirth": dateofbirth,
      "email": email,
      "phone": phone,
      "meetingtime": meetingtime,
    });
  }
}
