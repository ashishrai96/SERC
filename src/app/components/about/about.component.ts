import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AboutService } from './services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutText: any;
  isEdit: any;

  constructor(private service: AboutService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.aboutText = this.service.getHome();
  }

  onAboutButtonClick(){
    // console.log(this.aboutText);
    if(this.isEdit){  //Saving
      this.service.setHome(this.aboutText);
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Content Saved Successfully!!'});
    }
    
    this.isEdit = !this.isEdit;
  }

}
