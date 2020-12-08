import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { PERSONS } from '../mock-persons';
import { NgForage } from 'ngforage';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons = PERSONS;
  selectedPerson: Person; 
  
  constructor(private readonly ngf: NgForage) { }

  public getItem<T = any>(key: string): Promise<T> {
    return this.ngf.getItem<T>(key);
  }
  
  public setItem(key: string, value: number){
    this.ngf.setItem<Number>(key, value);
  }

  async ngOnInit(): Promise<void> {
    await this.getItem<Number>('lastSelectedPersonID').then(value => {
      this.selectedPerson = this.persons.find(p => p.id === value)
    })
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
    this.setItem("lastSelectedPersonID", person.id)
  }

}
