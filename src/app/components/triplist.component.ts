import { Component, OnChanges, OnInit } from '@angular/core';

import { User } from '../models';
import { StorageService } from '../storage.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-triplist',
  templateUrl: './triplist.component.html',
  styleUrls: ['./triplist.component.css'] // Note: Use 'styleUrls' instead of 'styleUrl'
})
export class TriplistComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private storageSvc: StorageService) {} // Inject StorageService in the constructor

  ngOnInit(): void {
    this.users$ = from(this.storageSvc.getAllUsers());
    
  }
}
