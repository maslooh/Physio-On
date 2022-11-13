import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NewsService } from '../services/news.service';
import { OurServicesService } from '../services/our-services.service';
import { SignInComponent } from '../core/sign-in/sign-in.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  signInComponent = SignInComponent;

  services: any[];

  window: Window = window;
  constructor(
    private ourServices: OurServicesService,
    public auth :AuthService
  ) {
    this.services = this.ourServices.services;
  }

  ngOnInit(): void {}
}
