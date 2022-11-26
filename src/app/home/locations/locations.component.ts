import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Loading } from 'src/app/enums/loading';
import { LoactionsService } from 'src/app/services/loactions.service';
import { PageLoaderService } from 'src/app/services/page-loader.service';
import { Location } from '../../models/location';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations: Location[];

  constructor(
    private locationsService: LoactionsService,
    public pageLoader: PageLoaderService,
    private messageService: MessageService,
    private dialogService: ConfirmationService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.pageLoader.show(Loading.locationsList);
    this.locationsService.GetLocationsList().subscribe((res) => {
      this.pageLoader.hide(Loading.locationsList);
      this.locations = res;
      this.locationsService.locations=res
    });
  }
}
