import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageCardComponent implements OnInit {

  @Input() object:any;
  @Output() onUpdate = new EventEmitter<any>();
  isEdit:boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

  onEditButtonClick(){
    if(this.isEdit){  //Saving
      this.onUpdate.emit(this.object);
    }

    this.isEdit = !this.isEdit;
  }

}
