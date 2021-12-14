import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './types';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { appt } from './appt';


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
    phone: string): Observable<Patient>{
    return this.http.post<Patient>('https://localhost:44337/api/patients',
    {
      "fname": firstname,
      "lname": lastname,
      "address": address,
      "DOB": dateofbirth,
      "phone": phone,
    });
  }

  submitAppt(meetingtime: string):  Observable<appt>{
    return this.http.post<appt>('https://localhost:44337/api/appts',
    {
      "date_time": meetingtime
    });
  }
}
