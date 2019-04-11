import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GeolocationService } from "./geolocation.service";
import { AppComponent } from './app.component';
import { DataService } from "./data.service";


import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule,  MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatToolbarModule,
         MatCardModule, MatSlideToggleModule, MatSnackBarModule } from "@angular/material";
import 'hammerjs';
import { ListComponent } from './list/list.component';
import { GummiBearComponent } from './gummibear/gummibear.component';
import { Routes, RouterModule } from "@angular/router";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
 import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const routes : Routes = [
  { path: '', component: ListComponent },
  { path: 'gummibear', component: GummiBearComponent },
  { path: 'gummibear/:id', component: GummiBearComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    GummiBearComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, HttpModule,
    BrowserModule, BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatInputModule, MatSelectModule, MatSliderModule, MatSnackBarModule,
    MatToolbarModule, MatCardModule, MatSlideToggleModule,  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }) 
  ],
  providers: [GeolocationService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
