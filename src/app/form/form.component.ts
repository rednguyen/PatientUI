import { Component, OnInit } from '@angular/core';
import { Patient } from '../types';
import { Router } from '@angular/router';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert('Your form has been submitted!');
    this.router.navigateByUrl('/');
  }

}
