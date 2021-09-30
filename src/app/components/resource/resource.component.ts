import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResourceService } from './services/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ResourceComponent implements OnInit {

  isEdit:boolean = false;
  contentText:string = "";
  selMenu:any;
  selectedId:any;

  subMenu = [
    { name: 'Projects', id: 0 },
    { name: 'Teaching', id: 1 },
    { name: 'Useful Links', id: 2 },
    { name: 'Demos', id: 3 },
    { name: 'Dataset', id: 4 },
    { name: 'Posters', id: 5 }
  ];

  constructor(private service: ResourceService) { }

  ngOnInit(): void {
    this.changeMenu(this.subMenu[0]);
  }

  changeMenu(event){
    this.selMenu = event;
    this.selectedId = event.id;

    switch (event.id) {
      case 0:
        this.contentText = this.service.getProjects();
        break;
      case 1:
        this.contentText = this.service.getTeaching();
        break;
      case 2:
        this.contentText = this.service.getLinks();
        break;
      case 3:
        this.contentText = this.service.getDemos();
        break;
      case 4:
        this.contentText = this.service.getDataset();
        break;
      case 5:
        this.contentText = this.service.getPosters();
        break;
    }
  }

  onIconClick(){
    if(this.isEdit){  //Saving
      switch (this.selectedId) {
        case 0:
          this.service.setProjects(this.contentText);
          break;
        case 1:
          this.service.setTeaching(this.contentText);
          break;
        case 2:
          this.service.setLinks(this.contentText);
          break;
        case 3:
          this.service.setDemos(this.contentText);
          break;
        case 4:
          this.service.setDataset(this.contentText);
          break;
        case 5:
          this.service.setPosters(this.contentText);
          break;
      }
    }
    this.isEdit = !this.isEdit;
    console.log(this.contentText);
  }

}
