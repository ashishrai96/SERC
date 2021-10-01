import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pub-card',
  templateUrl: './pub-card.component.html',
  styleUrls: ['./pub-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PubCardComponent implements OnInit {

  @Input() object;

  constructor() { }

  ngOnInit(): void {
  }

}
