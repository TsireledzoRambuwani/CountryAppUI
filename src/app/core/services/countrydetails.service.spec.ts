import { TestBed } from "@angular/core/testing";
import { CountrydetailsService } from "./countrydetails.service";
import { provideHttpClient } from "@angular/common/http";
import { provideHttpClientTesting } from "@angular/common/http/testing";

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

});