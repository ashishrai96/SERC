import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _homeEvent:string = Constants.HOME_EVENT;

  constructor() { }

  getEvent(){ return this._homeEvent; }

  setEvent(val){ this._homeEvent = val; }
}
