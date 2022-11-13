import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { CoreModule } from '../core/core.module';
import { NewsHomeComponent } from './home/news.home.component';
import {PaginatorModule} from 'primeng/paginator';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [
    NewsComponent,
    NewsItemComponent,
    NewsHomeComponent,
    AddNewComponent,
  ],
  imports: [CommonModule, CoreModule,PaginatorModule],
  exports: [NewsComponent, NewsItemComponent],
})
export class NewsModule {}
