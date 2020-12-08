import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  persons: object[]; 
  
  constructor() { }

  ngOnInit(): void {
    this.persons = [{
        "firstname": "Rune",
        "lastname": "Samyn",
        "birthday": "01-01-2000",
        "city": "Kortrijk",
      },
      {
        "firstname": "Jan",
        "lastname": "Siemens",
        "birthday": "02-08-1988",
        "city": "Brussel",
      },
      {
        "firstname": "Piet",
        "lastname": "Deroo",
        "birthday": "28-12-1991",
        "city": "Gent",
      }
    ]
  }

}
