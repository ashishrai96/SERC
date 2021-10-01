import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from "primeng/sidebar";
import { ImageModule } from "primeng/image";
import {EditorModule} from 'primeng/editor';
import { ChipModule } from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {ToastModule} from 'primeng/toast';



import { ContainerComponent } from './container/container.component';
import { HorizontalBarComponent } from './horizontal-bar/horizontal-bar.component';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    ContainerComponent,
    HorizontalBarComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    SidebarModule,
    ImageModule,
    FormsModule,
    EditorModule,
    ChipModule,
    ChipsModule,
    ToastModule
  ],
  exports: [
    SidebarModule,
    ImageModule,
    EditorModule,
    ChipModule,
    ChipsModule,
    ToastModule,
    ContainerComponent,
    HorizontalBarComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
