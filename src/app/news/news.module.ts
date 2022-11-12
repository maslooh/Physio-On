import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { CoreModule } from '../core/core.module';
import { AllNewsComponent } from './all-news/all-news.component';
import { NewsHomeComponent } from './home/news.home.component';
import {PaginatorModule} from 'primeng/paginator';

@NgModule({
  declarations: [
    NewsComponent,
    NewsItemComponent,
    AllNewsComponent,
    NewsHomeComponent,
  ],
  imports: [CommonModule, CoreModule,PaginatorModule],
  exports: [NewsComponent, NewsItemComponent],
})
export class NewsModule {}
