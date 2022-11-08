import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { NewsItemComponent } from './news-item/news-item.component';



@NgModule({
  declarations: [
    NewsComponent,
    NewsItemComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
