import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'serc';
  visibleSidebar1:boolean = false;
  selectedId:number;
  
  navMenuArray = [
    { name: 'Home', id: 0 },
    { name: 'About', id: 6 },
    { name: 'People', id: 1 },
    { name: 'Publications', id: 2 },
    { name: 'Focus Area', id: 3 },
    { name: 'Resources', id: 4 },
    { name: 'Contacts', id: 5 },
  ];
  
  constructor(private primengConfig: PrimeNGConfig, private router: Router) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.navigateTo(0);
  }

  navigateTo(id:Number){
    switch (id) {
      case 0:
        this.router.navigate(['home']);
        this.selectedId = 0;
        break;
      case 1:
        this.router.navigate(['people']);
        this.selectedId = 1;
        break;
      case 2:
        this.router.navigate(['publications']);
        this.selectedId = 2;
        break;
      case 3:
        this.router.navigate(['focus-area']);
        this.selectedId = 3;
        break;
      case 4:
        this.router.navigate(['resources']);
        this.selectedId = 4;
        break;
      case 5:
        this.router.navigate(['contact']);
        this.selectedId = 5;
        break;
      case 6:
        this.router.navigate(['about']);
        this.selectedId = 6;
        break;
    }
  }
}
