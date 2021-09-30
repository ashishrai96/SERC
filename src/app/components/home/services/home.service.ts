import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private _homeAbout:string = Constants.HOME_ABOUT;

  constructor() { }

  getHome(){ return this._homeAbout; }

  setHome(val){ this._homeAbout = val; }
}
