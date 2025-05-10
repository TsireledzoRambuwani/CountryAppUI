import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Countrydetails } from '../models/countrydetails.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountrydetailsService {

 url:string = environment.apiBaseUrl 
 
  constructor(private http: HttpClient) { }

  getCountryDetails(name:string): Observable<Countrydetails> {
    return this.http.get<Countrydetails>(`${ this.url }/${name}`)  
  }
}