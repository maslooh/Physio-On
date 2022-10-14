import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-booking-button',
  templateUrl: './booking-button.component.html',
  styleUrls: ['./booking-button.component.scss'],
})
export class BookingButtonComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
