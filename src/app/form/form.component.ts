import { Component, OnInit } from '@angular/core';
import { Patient } from '../types';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { appt } from '../appt';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    pID: string = '';
    fname: string = '';
    lname: string = '';
    address: string = '';
    DOB: string = '';
    phone: string = '';
    meetingtime: string = '';
    appt: appt[];
    reason: '';
    efirstname: '';
    elastname: '';
    ephone: '';
    
  constructor(
    private router: Router,
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.patientsService.submitForm(this.fname,this.lname,
      this.address,this.DOB, this.phone)
      .subscribe(() => {
        alert("Successfully Submitted!");
        this.router.navigateByUrl('/');
      })

    this.patientsService.submitAppt(this.meetingtime)
        .subscribe(() => {
          alert("Successfully Submitted!");
          this.router.navigateByUrl('/');
        })
    
  }

}
