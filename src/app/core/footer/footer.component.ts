import { Component, OnInit } from '@angular/core';
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
    if (!this.locationsService.locations) {
      this.locationsService.GetLocationsList().subscribe((res) => {
        this.locationsService.locations = res;
      });
    }
  }
}
