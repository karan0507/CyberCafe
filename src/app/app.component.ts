import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-newapp';
  // router: string;
  hideElement = false;

  constructor(router: Router) {
   router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/') {
          this.hideElement = true;
        }  else {
          this.hideElement = false;
        }
      }
    });
  }
}
