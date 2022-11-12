import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent implements OnInit {
  newsItem?: News;

  constructor(
    private activatedRoute: ActivatedRoute,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.newsService.getNewsItemById(id).subscribe((n) => {
      this.newsItem = n;
    });
  }
}
