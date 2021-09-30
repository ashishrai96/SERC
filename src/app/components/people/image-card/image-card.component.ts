import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageCardComponent implements OnInit {

  @Input() object:any;

  constructor() { }

  ngOnInit(): void {
    console.log("Image =>", this.object);
  }

}
