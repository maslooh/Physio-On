import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingButtonComponent } from './booking-button/booking-button.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { AddressPipe } from './address.pipe';
import { ReadMoreComponent } from './read-more/read-more.component';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BookingButtonComponent,
    AddressPipe,
    ReadMoreComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    RouterModule,
    CarouselModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BookingButtonComponent,
    RouterModule,
    ButtonModule,
    RippleModule,
    CarouselModule,
    ReadMoreComponent,
  ],
})
export class CoreModule {}
