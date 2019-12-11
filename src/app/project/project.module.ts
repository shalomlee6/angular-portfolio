import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectRoutingModule } from './project-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SubProjectsComponent } from './sub-projects/sub-projects.component';
import { SlideshowModule } from 'ng-simple-slideshow';

import {
  MatCardModule,
  MatButtonModule,
   MatInputModule,
    MatFormFieldModule } from '@angular/material';


@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectCardComponent,
    SubProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    SlideshowModule
  ]
})
export class ProjectModule { }
