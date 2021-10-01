import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LoaderService } from 'src/app/shared/loader/services/loader.service';
import { PublicationService } from './services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  pubs:any[] = [];

  constructor(private service: PublicationService, private loader: LoaderService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.loadPublicationByQuery();
  }

  loadPublicationByQuery(){
    this.loader.start();
    this.service.getPublications().subscribe((data:any) => {
      this.pubs = [ ...data.result.hits.hit ].map(x => ({
        'authors': Array.isArray(x.info.authors.author)?x.info.authors.author : [ x.info.authors.author ],
        'title': x.info.title,
        'pages': x.info.pages,
        'year': x.info.year,
        'url': x.info.url,
      }));
      this.loader.stop();
    },
    () => {
      //Error occurred!!
      this.loader.stop();
      this.messageService.add({severity:'error', summary: 'Error', detail: 'Something went wrong!!'});
    });
  }

}
