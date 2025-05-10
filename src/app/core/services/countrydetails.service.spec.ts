import { fakeAsync, TestBed } from "@angular/core/testing";
import { CountrydetailsService } from "./countrydetails.service";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";
import { Observable } from "rxjs";

describe('CountrydetailsService', () => {
  let countryDetailsService: CountrydetailsService;

  beforeEach(() => {
     TestBed.configureTestingModule({
        providers: [ provideHttpClient(), provideHttpClientTesting() ,CountrydetailsService],
    });

    countryDetailsService =TestBed.inject(CountrydetailsService)
  });

  it('should create the service', () => {
    expect(countryDetailsService).toBeTruthy();
  });

      it('return countriesDetails', fakeAsync(() => {
    const reqObsr$: Observable<any> = countryDetailsService.getCountryDetails("Botswana");
    reqObsr$.subscribe(res => {
      expect(res).toEqual({});
    });
    
}))

});