import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-sub-projects',
  templateUrl: './sub-projects.component.html',
  styleUrls: ['./sub-projects.component.scss']
})
export class SubProjectsComponent implements OnInit {

  click = false;
  project: Project;
  safeSrc: SafeResourceUrl;
  androidImages: string[];
  iosImages: string[];
  constructor(
    private router: ActivatedRoute,
    private projectService: ProjectService,
    private sanitizer: DomSanitizer
    ) {

      this.safeSrc =  this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/8lyxzvH5dvU');
    }

  ngOnInit() {
    this.iosImages = this.projectService.getIosScreenshots();
    this.androidImages = this.projectService.getAndroidScreenshots();

    this.project = this.projectService.getProject(this.router.snapshot.paramMap.get('id'));
  }

  onClick() {
    console.log('this.click was clicked and its val = ', this.click );
    if (this.click) {
      this.click = false;
    } else {
      this.click = true;
    }
  }

  getBackgroundImageUrl() {

    switch (this.project.id) {
      case 1:
          return `url(assets/img/web.jpg)`;
      // case 2:
      //     return `url(assets/img/game-dev/park.jpg)`;
      // case 3:
      //     return `url(assets/img/2.jpg)`;
      // case 4:
      //     return `url(assets/img/3.jpg)`;
    }
  }
}
