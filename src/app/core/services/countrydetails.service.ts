import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Countrydetails } from '../models/countrydetails.model';

@Injectable({
  providedIn: 'root'
})
export class CountrydetailsService {

 url:string = environment.apiBaseUrl + '/countries'
  constructor(private http: HttpClient) { }
  country: Countrydetails = new Countrydetails;

  getCountryDetails(name:string){
    this.http.get(`${ this.url }/${name}`)
    .subscribe({
      next: res =>{
        this.country =res as Countrydetails
      },
      error: err =>{
         alert("Error while fetching Country details")
      }
    })
  }
}