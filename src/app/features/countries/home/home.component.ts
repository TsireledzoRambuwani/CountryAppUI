import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../../core/services/countries.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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

  constructor(public service :CountriesService){}


  ngOnInit(): void {
  this.service.getAllCountries();
  }
}

