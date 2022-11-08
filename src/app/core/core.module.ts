import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookingButtonComponent } from './booking-button/booking-button.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { AddressPipe } from './address.pipe';
import { ReadMoreComponent } from './read-more/read-more.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InputTextModule } from 'primeng/inputtext';
import { DynamicDialogComponent } from './dynamic-dialog/dynamic-dialog.component';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    BookingButtonComponent,
    AddressPipe,
    ReadMoreComponent,
    SignInComponent,
    DynamicDialogComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RippleModule,
    RouterModule,
    CarouselModule,
    CheckboxModule,
    InputTextModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    BookingButtonComponent,
    RouterModule,
    ButtonModule,
    RippleModule,
    CarouselModule,
    ReadMoreComponent,
    CheckboxModule,
    InputTextModule,
    DynamicDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CoreModule {}
