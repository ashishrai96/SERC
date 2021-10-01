import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  showLoader: boolean = false;

  constructor(private loader: LoaderService) { 
    this.loader.getLoader().subscribe(x => {
      if(x != null){
        this.showLoader = x;
      }
    });
  }

  ngOnInit(): void {
  }

}
