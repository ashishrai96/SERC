import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private _people:any = Constants.PEOPLE_DATA;

  constructor() { }

  setPeople(val) { this._people = val; }

  getPeople() { return this._people; }
}
