import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private _loader = new Subject<boolean>();

  constructor() { }

  start(){
    this._loader.next(true);
  }

  stop(){
    this._loader.next(false);
  }
  getLoader(){
    return this._loader.asObservable();
  }
}
