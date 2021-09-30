import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  selectedId: number;
  
  subMenu = [
    { name: 'Faculty', id: 0 },
    { name: 'PhD Students', id: 1 },
    { name: 'MS Students', id: 2 },
    { name: 'BTech Students', id: 3 },
    { name: 'Project Interns', id: 4 },
  ];

  peopleObject:any;
  selectedPeople:any;

  constructor(private service: PeopleService) { }

  ngOnInit(): void {
    this.peopleObject = this.service.getPeople();
    this.changeMenu(this.subMenu[0]);
    
  }

  changeMenu(event){
    this.selectedId = event.id;
    switch (event.id) {
      case 0:
        this.selectedPeople = this.peopleObject.FACULTY; 
        break;
      case 1:
        this.selectedPeople = this.peopleObject.PHD_STUDENTS;
        break;
      case 2:
        this.selectedPeople = this.peopleObject.MS_STUDENTS;
        break;
      case 3:
        this.selectedPeople = this.peopleObject.BTECH_STUDENTS;
        break;
      case 4:
        this.selectedPeople = this.peopleObject.INTERNS;
        break;
    }
    console.log("selected people", this.selectedPeople);
  }

}
