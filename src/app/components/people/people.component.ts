import { Component, OnInit } from '@angular/core';
import { PeopleService } from './services/people.service';

import * as _ from 'lodash';
import { MessageService } from 'primeng/api';

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

  constructor(private service: PeopleService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.peopleObject = this.service.getPeople();
    this.changeMenu(this.subMenu[0]);
    
  }

  changeMenu(event){
    this.selectedId = event.id;
    switch (event.id) {
      case 0:
        this.selectedPeople = _.cloneDeep(this.peopleObject.FACULTY); 
        break;
      case 1:
        this.selectedPeople = _.cloneDeep(this.peopleObject.PHD_STUDENTS);
        break;
      case 2:
        this.selectedPeople = _.cloneDeep(this.peopleObject.MS_STUDENTS);
        break;
      case 3:
        this.selectedPeople = _.cloneDeep(this.peopleObject.BTECH_STUDENTS);
        break;
      case 4:
        this.selectedPeople = _.cloneDeep(this.peopleObject.INTERNS);
        break;
    }
  }

  onUpdate(event){
    switch (this.selectedId) {
      case 0:
        this.peopleObject['FACULTY'][event.groupIdx]['value'][event.cardIdx] = { ...event.card };
        break;
      case 1:
        this.peopleObject['PHD_STUDENTS'][event.groupIdx]['value'][event.cardIdx] = { ...event.card };
        break;
      case 2:
        this.peopleObject['MS_STUDENTS'][event.groupIdx]['value'][event.cardIdx] = { ...event.card };
        break;
      case 3:
        this.peopleObject['BTECH_STUDENTS'][event.groupIdx]['value'][event.cardIdx] = { ...event.card };
        break;
      case 4:
        this.peopleObject['INTERNS'][event.groupIdx]['value'][event.cardIdx] = { ...event.card };
        break;
    }
    
    this.service.setPeople(this.peopleObject);
    this.messageService.add({severity:'success', summary: 'Success', detail: 'Content Saved Successfully!!'});
  }

}
