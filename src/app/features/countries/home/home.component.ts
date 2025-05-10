import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { Countries } from '../../../core/models/countries.model';

@Component({
  selector: 'app-home',
   imports: [
    CommonModule,
    RouterModule,
    FormsModule 
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  countries$!: Observable<Countries[]>;
  
  constructor(public service :CountriesService){}
  
  ngOnInit(): void {
  this.countries$ = this.service.getAllCountries()
    }}

