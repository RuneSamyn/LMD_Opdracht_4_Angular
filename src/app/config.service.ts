import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PERSONS } from './mock-persons';
import { Person } from './Person';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  persons = PERSONS;
  personsUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPersons() {
    return this.http.get(this.personsUrl);
  }
}
