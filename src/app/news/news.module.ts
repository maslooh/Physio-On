import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [NewsComponent, NewsItemComponent],
  imports: [CommonModule, CoreModule],
  exports:[ NewsComponent, NewsItemComponent]
})
export class NewsModule {}
