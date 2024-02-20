import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';
import { User } from '../models';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrl: './trip.component.css'
})
export class TripComponent implements OnInit{

  
  
  constructor(
    private fb: FormBuilder,
    private storageSvc: StorageService,
    private router: Router
  ) {}


  form!: FormGroup

  ngOnInit(): void { // this is special becuase The getAllUsers() method in your StorageService is returning an array of User objects, but you're treating it as a single object when initializing your form controls.
    // this means once it starts> now i have to make a form
    
    this.form = this.fb.group({
      // if u is truthy u.date is returned
      date: this.fb.control<string>('',[Validators.required]),
      text: this.fb.control<string>('',[Validators.required]),
      type: ['Travel', [Validators.required]] // Set a default value or initialize it as necessary
    })
  }

  process(): void {
    if (this.form.valid) {
      const formData = this.form.value;
      const user: User = {
        date: formData.date,
        text: formData.text,
        type: formData.type
      };
      this.storageSvc.addUser(user);
  
      this.form.reset({
        date: '',
        text: '',
        type: 'Travel' // Set the default value for the type control
      });
  
    } else {
      // Handle form validation errors
      console.error('Form is invalid');
    }
  }
}
