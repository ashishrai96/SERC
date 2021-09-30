import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeopleComponent } from './components/people/people.component';
import { ResourceComponent } from './components/resource/resource.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'resources', component: ResourceComponent },
  { path: 'people', component: PeopleComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
