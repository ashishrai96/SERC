import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from "primeng/sidebar";
import { ImageModule } from "primeng/image";
import {EditorModule} from 'primeng/editor';
import { ChipModule } from 'primeng/chip';


import { ContainerComponent } from './container/container.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ContainerComponent,
    HorizontalBarComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ImageModule,
    FormsModule,
    EditorModule,
    ChipModule
  ],
  exports: [
    SidebarModule,
    ImageModule,
    EditorModule,
    ChipModule,
    ContainerComponent,
    HorizontalBarComponent
  ]
})
export class SharedModule { }
