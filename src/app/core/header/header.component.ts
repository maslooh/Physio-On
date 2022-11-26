import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

enum navItems {
  Home = 'intro',
  About = 'about',
  Services = 'services',
  'News & Articles' = 'news',
  Locations = 'locations',
  'Partners & Providers' = 'partners',
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  window: Window = window;
  navItems = navItems;
  currentRoute: string = '';
  routeAction: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.window.addEventListener('scroll', () => {});
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((_) => {
        this.currentRoute = (_ as NavigationEnd).url.split('/')[1];
        this.currentRoute = this.currentRoute.startsWith('#')
          ? this.currentRoute.split('#')[1]
          : this.currentRoute;
        this.routeAction = (_ as NavigationEnd).url.split('/')[2]
        console.log(this.routeAction);
        
      });
  }

  sortNull() {
    return 0;
  }
}
