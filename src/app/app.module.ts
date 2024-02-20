import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './components/trip.component';
import { TriplistComponent } from './components/triplist.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageService } from './storage.service';

@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    TriplistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    StorageService, 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
