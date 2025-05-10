import { fakeAsync, TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

describe('CountriesService', () => {
   let countriesService: CountriesService;
 let mockHttpClient ={
     get:() => of([])
 }
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [ provideHttpClient(), provideHttpClientTesting() ,CountriesService, {useValue :mockHttpClient}],
     });
 
     countriesService =TestBed.inject(CountriesService)
   });
 
   it('should create the service', () => {
     expect(countriesService).toBeTruthy();
   });
 
    it('return list of countries', fakeAsync(() => {
    const reqObsr$: Observable<any> = countriesService.getAllCountries();
    reqObsr$.subscribe(res => {
      expect(res).toEqual({});
    });
}))

 });



