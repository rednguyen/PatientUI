import { Component, OnInit } from '@angular/core';
import { Patient } from '../types';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    firstname: string = '';
    lastname: string = '';
    address: string = '';
    dateofbirth: string = '';
    email: string = '';
    phone: string = '';
    reason: string ='';
    efirstname: string = '';
    elastname: string = '';
    ephone: string = '';
    patient: Patient;
    
  constructor(
    private router: Router,
    private patientsService: PatientsService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.patientsService.submitForm(this.firstname,this.lastname,
      this.address,this.dateofbirth,this.email, this.phone)
        .subscribe(() => {
          alert("Successfully Submitted!");
          this.router.navigateByUrl('/');
        })
    
  }

}
