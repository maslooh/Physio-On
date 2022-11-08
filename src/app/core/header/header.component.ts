import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SignInComponent } from '../sign-in/sign-in.component';

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
  signInComponent = SignInComponent;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.window.addEventListener('scroll', () => {});
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((_) => {
        this.currentRoute = (_ as NavigationEnd).url.split('/')[1];
      });
  }

  sortNull() {
    return 0;
  }
}
