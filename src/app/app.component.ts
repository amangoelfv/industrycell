import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isLoading: boolean = true;
  constructor(private router: Router) {

  }
  ngOnInit() {
    this.router.events.subscribe((val) => {
      this.isLoading = true;
      if(val instanceof NavigationEnd) {
        setTimeout(() => {
          this.isLoading = false
        }, 1000)
      }
  });
  }
}
