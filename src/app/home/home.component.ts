import {
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { OurServicesService } from '../services/our-services.service';
import { SignInComponent } from '../core/sign-in/sign-in.component';
import { AuthService } from '../services/auth.service';
import { PageLoaderService } from '../services/page-loader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit, AfterViewInit {
  signInComponent = SignInComponent;
  services: any[];
  window: Window = window;

  constructor(
    private pageLoader: PageLoaderService,
    private ourServices: OurServicesService,
    public auth: AuthService
  ) {
    this.services = this.ourServices.services;
  }
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.pageLoader.show();
  }

  signOut() {
    this.pageLoader.show();
    this.auth.signOut().then((_) => {
      this.pageLoader.hide();
    });
  }
}
