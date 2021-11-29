import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTestimonialsComponent } from './patient-testimonials.component';

describe('PatientTestimonialsComponent', () => {
  let component: PatientTestimonialsComponent;
  let fixture: ComponentFixture<PatientTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
