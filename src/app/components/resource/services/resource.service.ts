import { Injectable } from '@angular/core';
import { Constants } from 'src/app/models/constants.model';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  private _resProjects:string = Constants.RESOURCES.PROJECTS;
  private _resTeaching:string = Constants.RESOURCES.TEACHING;
  private _resLinks:string = Constants.RESOURCES.USEFULL_LINKS;
  private _resDemos:string = Constants.RESOURCES.DEMOS;
  private _resDataset:string = Constants.RESOURCES.DATASET;
  private _resPosters:string = Constants.RESOURCES.POSTERS;

  constructor() { }

  setProjects(val){ this._resProjects = val; }
  
  getProjects(){ return this._resProjects; }
  
  setTeaching(val){ this._resTeaching = val; }
  
  getTeaching(){ return this._resTeaching; }
  
  setLinks(val){ this._resLinks = val; }
  
  getLinks(){ return this._resLinks; }
  
  setDemos(val){ this._resDemos = val; }
  
  getDemos(){ return this._resDemos; }
  
  setDataset(val){ this._resDataset = val; }
  
  getDataset(){ return this._resDataset; }
  
  setPosters(val){ this._resPosters = val; }
  
  getPosters(){ return this._resPosters; }
}
