import { TestBed } from '@angular/core/testing';

import { CountriesService } from './countries.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('CountriesService', () => {
   let countriesService: CountriesService;
 
   beforeEach(() => {
      TestBed.configureTestingModule({
         providers: [ provideHttpClient(), provideHttpClientTesting() ,CountriesService],
     });
 
     countriesService =TestBed.inject(CountriesService)
   });
 
   it('should create the service', () => {
     expect(countriesService).toBeTruthy();
   });
 
 });


