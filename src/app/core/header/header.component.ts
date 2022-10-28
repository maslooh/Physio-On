import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.window.addEventListener('scroll', () => {});
  }

  onClick(e: Event, navbarClose: HTMLButtonElement) {
    this.activatedRoute.fragment.subscribe((_) => {
      this.JumpTo(_);
    });
    navbarClose.click();
  }

  JumpTo(section: any) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

  sortNull() {
    return 0;
  }
}
