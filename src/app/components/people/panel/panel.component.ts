import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {

  @Input() object:any;
  @Output() onUpdate = new EventEmitter<any>();

  objectCopy;

  constructor() { }

  ngOnChanges(){
    this.objectCopy = _.cloneDeep(this.object);
  }

  ngOnInit(): void {
  }

  onCardUpdate(event, idx, rIdx){
    // console.log(event, idx, rIdx);
    this.onUpdate.emit({
      card: event,
      cardIdx: idx,
      groupIdx: rIdx
    });
  }

}
