import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FocusAreaComponent } from './components/focus-area/focus-area.component';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { PublicationComponent } from './components/publication/publication.component';
import { ResourceComponent } from './components/resource/resource.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resources', component: ResourceComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'focus-area', component: FocusAreaComponent },
  { path: 'publications', component: PublicationComponent },
  { path: 'about', component: AboutComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
