import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {}

  navBack() {
    this.router.navigate(['/projects']);
  }

  isSubProjectRouteActive() {
    return  this.router.url === '/projects/sub-projects/1' ||
              this.router.url === '/projects/sub-projects/2' ||
                this.router.url === '/projects/sub-projects/3' ||
                  this.router.url === '/projects/sub-projects/4';
  }
}
