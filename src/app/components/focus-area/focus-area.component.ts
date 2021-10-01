import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Constants } from 'src/app/models/constants.model';
import { FocusAreaService } from './services/focus-area.service';
import * as _ from 'lodash';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-focus-area',
  templateUrl: './focus-area.component.html',
  styleUrls: ['./focus-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FocusAreaComponent implements OnInit {

  focusArea;
  isEdit;


  constructor(private service: FocusAreaService, private messageService:MessageService) { }

  ngOnInit(): void {
    this.focusArea = _.cloneDeep(this.service.getFocusArea());
    this.focusArea.forEach(item => {
      this.isEdit = {
        ...this.isEdit,
        [item.label] : false
      };
    });
  }

  onEditButtonClick(label){
    // console.log(this.focusArea);
    if(this.isEdit){  //saving
      this.service.setFocusArea(this.focusArea);
      this.focusArea = _.cloneDeep(this.service.getFocusArea());
      this.messageService.add({severity:'success', summary: 'Success', detail: 'Content Saved Successfully!!'});
    }

    this.isEdit[label] = !this.isEdit[label];
  }

}
