import { Component, OnInit } from '@angular/core';
import { Person } from '../Person';
import { PERSONS } from '../mock-persons';
import { NgForage } from 'ngforage';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  // persons = PERSONS;
  persons: Person[];
  selectedPerson: Person;
  
  constructor(private readonly ngf: NgForage, private configService: ConfigService) { }

  public getItem<T = any>(key: string): Promise<T> {
    return this.ngf.getItem<T>(key);
  }
  
  public setItem(key: string, value: number){
    this.ngf.setItem<Number>(key, value);
  }

  getPersons() {
    this.configService.getPersons()
      .subscribe((ps: JSON) => {
        var list: Person[] = [];
        for(let p in ps) {
          list.push(ps[p]);
        }
        this.persons = list;
      });
  }

  async ngOnInit(): Promise<void> {
    await this.getPersons();
    await this.getItem<Number>('lastSelectedPersonID').then(value => {
      this.selectedPerson = this.persons.find(p => p.id === value)
    })
  }

  onSelect(person: Person): void {
    this.selectedPerson = person;
    this.setItem("lastSelectedPersonID", person.id)
  }

}
