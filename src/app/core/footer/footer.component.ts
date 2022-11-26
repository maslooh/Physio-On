import { Component, OnInit } from '@angular/core';
import { Loading } from 'src/app/enums/loading';
import { LoactionsService } from 'src/app/services/loactions.service';
import { PageLoaderService } from 'src/app/services/page-loader.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  year: number;

  constructor(
    public locationsService: LoactionsService,
    public pageLoader: PageLoaderService
  ) {}

  ngOnInit(): void {
    this.year = new Date().getFullYear();
    if (this.locationsService.locations) {
      this.pageLoader.show(Loading.locationsList);
      this.locationsService.GetLocationsList().subscribe((res) => {
        this.pageLoader.hide(Loading.locationsList);
        this.locationsService.locations = res;
      });
    }
  }
}
