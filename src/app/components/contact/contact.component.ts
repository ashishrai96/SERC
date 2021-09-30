import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  bingMapBasicKey = 'AuWRD0jDIMBZtIKEL7NxJzEKrErbjAfD69ZcQEjueDxH1_xKkmX6xWoKsETJAofi';
  lat = 17.445389;
  lng = 78.348228;
  imagePreviewUrl = `http://dev.virtualearth.net/REST/v1/Imagery/Map/Road?mapSize=350,250&pp=${this.lat},${this.lng};45&mapLayer=TrafficFlow&key=${this.bingMapBasicKey}`;

  
  @ViewChild('contactForm') contactForm:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    let name = this.contactForm.value.name;
    let email = this.contactForm.value.email;
    let msg = this.contactForm.value.message;

    if(name!="" && email != "" && msg != ""){
        alert('Thanks for your feedback, we will be responding soon!!!');
        this.contactForm.reset();
    }
    else{
        alert("Please enter all the details before submitting");
    }

  }

}
