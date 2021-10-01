import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants.model';

@Injectable({
  providedIn: 'root'
})
export class FocusAreaService {

  private _focusArea = Constants.FOCUS_AREA;

  constructor() { }

  setFocusArea(val) { this._focusArea = val; }

  getFocusArea() { return this._focusArea; }
}
