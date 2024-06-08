import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Url } from 'src/app/models/bookingUrl';
import { PageLoaderService } from 'src/app/services/page-loader.service';
import { Loading } from 'src/app/enums/loading';
import { finalize, take } from 'rxjs';
@Component({
  selector: 'app-booking-button',
  templateUrl: './booking-button.component.html',
  styleUrls: ['./booking-button.component.scss'],
})
export class BookingButtonComponent implements OnInit {
  bookingUrl: any;
  constructor(
    private primengConfig: PrimeNGConfig,
    private afs: AngularFirestore,
    private pageLoader: PageLoaderService
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.pageLoader.show(Loading.getNewsItem);
    this.getCurrentBookingUrl()
      .pipe(
        take(1),
        finalize(() => {
          this.pageLoader.hide(Loading.getNewsItem);
        })
      )
      .subscribe((res) => {
        this.bookingUrl = res?.url;
      });
  }

  getCurrentBookingUrl() {
    let locationDoc = this.afs.doc<Url>(`bookingUrl/myBookingUrl`);
    return locationDoc.valueChanges({ idField: 'id' });
  }
}
