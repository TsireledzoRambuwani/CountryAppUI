import { provideRouter, Routes } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

export const routes: Routes = [

    { path: 'countries', 
      loadChildren: () => import('./features/countries/countries-routing.module')
      .then(m => m.CountriesRoutingModule) },
      
    { path: '', redirectTo: 'countries/home', pathMatch: 'full' },

];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};