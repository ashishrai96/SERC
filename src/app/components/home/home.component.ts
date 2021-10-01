import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { HomeService } from './services/home.service';
import {MessageService} from 'primeng/api';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  eventText:any = "";
  isEdit:boolean = false;

  bannerImages:any[] = [
    { src: "assets/images/banner1.jpeg", alt:"Banner-1" },
    { src: "assets/images/banner2.jpeg", alt:"Banner-2" },
    { src: "assets/images/banner3.jpeg", alt:"Banner-3" },
    { src: "assets/images/banner4.jpeg", alt:"Banner-4" },
    { src: "assets/images/banner5.jpeg", alt:"Banner-5" },
    { src: "assets/images/banner6.jpeg", alt:"Banner-6" }
  ];

  sercImages = [
    { src: "assets/images/serc_image1.png", alt: "SERC Details" },
    { src: "assets/images/serc_image2.png", alt: "SERC Apply Now" },
  ];

  constructor(private service: HomeService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.eventText = this.service.getEvent();
  }

  ngAfterViewInit(){
    (<any>window).twttr.widgets.load();
  }

  onEventButtonClick(){
    // console.log(this.eventText);
    if(this.isEdit){  //Saving
      this.service.setEvent(this.eventText);
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Content Saved Successfully!!'});
    }
    
    this.isEdit = !this.isEdit;
  }
}
