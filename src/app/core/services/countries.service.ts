import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Countries } from '../models/countries.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  url:string = environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.url)   
  }
}
