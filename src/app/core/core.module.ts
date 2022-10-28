import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingButtonComponent } from './booking-button/booking-button.component';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, BookingButtonComponent],
  imports: [CommonModule,ButtonModule,RippleModule,RouterModule],
  exports: [HeaderComponent,FooterComponent,BookingButtonComponent,RouterModule],
})
export class CoreModule {}
