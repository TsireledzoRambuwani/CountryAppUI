import { Component, OnInit } from '@angular/core';
import { CountrydetailsService } from '../../../core/services/countrydetails.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Countrydetails } from '../../../core/models/countrydetails.model';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [FormsModule,CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

   countryDetails$!: Observable<Countrydetails>;

  constructor(public service :CountrydetailsService,
    public router:Router, 
    private _route: ActivatedRoute){}

   ngOnInit(): void {
    this._route.params.subscribe(params => {
    this.countryDetails$ =  this.service.getCountryDetails(params['name']);
     }
    )
  }
}