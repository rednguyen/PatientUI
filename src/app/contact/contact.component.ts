import { Component, OnInit } from '@angular/core';
import { Patient } from '../types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {



  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }



}
