import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './shared/shared.module';
import { ResourceComponent } from './components/resource/resource.component';
import { PeopleComponent } from './components/people/people.component';
import { PanelComponent } from './components/people/panel/panel.component';
import { ImageCardComponent } from './components/people/image-card/image-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { FocusAreaComponent } from './components/focus-area/focus-area.component';
import { PublicationComponent } from './components/publication/publication.component';
import { PubCardComponent } from './components/publication/pub-card/pub-card.component';
import { AboutComponent } from './components/about/about.component';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResourceComponent,
    PeopleComponent,
    PanelComponent,
    ImageCardComponent,
    ContactComponent,
    FocusAreaComponent,
    PublicationComponent,
    PubCardComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [ MessageService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
