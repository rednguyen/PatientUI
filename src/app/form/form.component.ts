import { Component, OnInit } from '@angular/core';
import { Patient } from '../types';
import { Router } from '@angular/router';
import { PatientsService } from '../patients.service';
import { appt } from '../appt';
import { Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms'; 
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    form: FormGroup;
    submitted=false;
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
    private patientsService: PatientsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      pID:[''],
      fname:  ['',Validators.required],
      lname: ['',Validators.required],
      address:['',Validators.required],
      DOB:['',[Validators.required,Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
      phone:['',[Validators.required, Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]],
      meetingtime:['',Validators.required],
      reason: ['',Validators.required],
      efirstname: ['',Validators.required],
      elastname: ['',Validators.required],
      ephone: ['',[Validators.required, Validators.pattern("^((\\+1-?)|0)?[0-9]{10}$")]]
    }
    );

  }
  get f(){return this.form.controls;}

  onSubmit(): void {
    this.submitted=true;
    if (this.form.invalid){
      alert("Wrong input");
      return;
      
    }
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
