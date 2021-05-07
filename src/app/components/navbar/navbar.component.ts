import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { INavbarItem } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeIndex: number = 0;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events
      .subscribe(
        (event) => {
          if (event instanceof NavigationEnd) {
            const activeTab = event.url.split('/')[1];

            this.activeIndex = this.navbarItems.findIndex((navbarItem) => navbarItem.route === activeTab)
          }
        });
  }

  navbarItems: INavbarItem[] = [
    {
      icon: '/assets/icons/home.svg',
      title: 'Home',
      route: ''
    },
    {
      icon: '/assets/icons/about-us.svg',
      title: 'About Us',
      route: 'about-us'
    },
    {
      icon: '/assets/icons/team.svg',
      title: 'Team',
      route: 'team'
    },
    {
      icon: '/assets/icons/events.svg',
      title: 'Events',
      route: 'events'
    },
  ]
}
