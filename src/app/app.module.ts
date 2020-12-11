import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { NgForageOptions, Driver, NgForageConfig, DEFAULT_CONFIG } from 'ngforage';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    // One way of configuring ngForage
    {
        provide: DEFAULT_CONFIG,
        useValue: {
          name: 'OpdrachtAngular',
          driver: [ // defaults to indexedDB -> webSQL -> localStorage
            Driver.INDEXED_DB,
            Driver.LOCAL_STORAGE
          ]
        } as NgForageOptions
      }
      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
