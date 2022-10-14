import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingButtonComponent } from './booking-button/booking-button.component';
import {ButtonModule} from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, BookingButtonComponent],
  imports: [CommonModule,ButtonModule,RippleModule],
  exports: [HeaderComponent,FooterComponent,BookingButtonComponent],
})
export class CoreModule {}
