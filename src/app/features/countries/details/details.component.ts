import { Component, OnInit } from '@angular/core';
import { CountrydetailsService } from '../../../core/services/countrydetails.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  constructor(public service :CountrydetailsService,
    public router:Router, 
    private _route: ActivatedRoute){}

  ngOnInit(): void {
     this._route.params.subscribe(params => {
     this.service.getCountryDetails(params['name']);

 }); 

  }
}
