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
  list: Countries[] = [];

  getAllCountries(){
    this.http.get(this.url)
    .subscribe({
      next: res =>{
        
        this.list =res as Countries[]
         console.log(res)
          console.log('hi')
        return this.list
      },
      error: err =>{
        console.log(err)
      }
    })
  }
}
