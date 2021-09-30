import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Constants } from 'src/app/models/constants.model';

@Component({
  selector: 'app-focus-area',
  templateUrl: './focus-area.component.html',
  styleUrls: ['./focus-area.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FocusAreaComponent implements OnInit {

  focusArea  = Constants.FOCUS_AREA;
  constructor() { }

  ngOnInit(): void {
  }

}
