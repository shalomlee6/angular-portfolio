import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { projects } from '../models/db-data.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProject( id ) {
    // tslint:disable-next-line: prefer-const
    for ( let p of projects) {
      if ( ( p.id.toString() ) === id) {
        return p;
      }
    }
  }

  getProjects() {
    // return a list of project as an Observable
    return of(projects);
  }


  getAndroidScreenshots() {
    return [
      'assets/img/android/1.jpg',
       'assets/img/android/2.jpg',
        'assets/img/android/3.jpg',
         'assets/img/android/4.jpg',
         'assets/img/android/5.jpg',
         'assets/img/android/6.jpg',
         'assets/img/android/7.jpg'
      ];
  }

  getIosScreenshots() {
    return [
      'assets/img/ios/1.jpg',
       'assets/img/ios/2.jpg',
        'assets/img/ios/3.jpg',
         'assets/img/ios/4.jpg',
         'assets/img/ios/5.jpg',
         'assets/img/ios/6.jpg',
         'assets/img/ios/7.jpg'
      ];
  }

}
