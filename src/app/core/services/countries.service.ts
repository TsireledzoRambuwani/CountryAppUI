import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Countries } from '../models/countries.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url:string = environment.apiBaseUrl + '/countries'
  constructor(private http: HttpClient) { }
  countryList: Countries[] = [];

  getAllCountries(){
    this.http.get(this.url)
    .subscribe({
      next: res =>{      
        this.countryList =res as Countries[]
        return this.countryList
      },
      error: err =>{
        alert("Error while fetching Countries")
      }
    })
  }
}
