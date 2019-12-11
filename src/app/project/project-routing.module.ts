import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { SubProjectsComponent } from './sub-projects/sub-projects.component';


const routes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'project',
    component: ProjectCardComponent
  },
  {
    path: 'sub-projects',
    component: SubProjectsComponent
  },
  {
    path: 'sub-projects/:id',
    component: SubProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  ProjectRoutingModule { }
