import { Component, OnInit } from '@angular/core';
import { PageLoaderService } from 'src/app/services/page-loader.service';

@Component({
  selector: 'app-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {

  constructor(public pageLoader: PageLoaderService) { }

  ngOnInit(): void {
  }

}
