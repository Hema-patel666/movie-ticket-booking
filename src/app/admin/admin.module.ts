import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListmovieComponent } from './listmovie/listmovie.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TheaterComponent } from './theater/theater.component';
import { MovieComponent } from "./movie/movie.component";
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    TheaterComponent,
    ListmovieComponent,
    MoviedetailsComponent,
    MovieComponent

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
 
  ],

  exports: [
    MovieComponent,
    DashboardComponent,
    LoginComponent,
    HomeComponent,
    TheaterComponent,
    ListmovieComponent,
    MoviedetailsComponent,

  ],
  
})
export class AdminModule { }
