import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { News } from 'src/app/models/news';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';
import { PageLoaderService } from 'src/app/services/page-loader.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent implements OnInit {
  @Input() hasMoreNewsBtn: boolean = false;
  @Input() hasPagination: boolean = true;
  isLoading: boolean = true;
  window = window;
  newsList: News[] = [];
  isLoggedIn: boolean = false;
  paginateStart: number = 0; //inclusive
  paginateEnd: number = 3; //exclusive
  totalNewsCount: number;

  constructor(
    private newsService: NewsService,
    public authService: AuthService,
    public pageLoader: PageLoaderService
  ) {}

  ngOnInit(): void {
    this.pageLoader.show();
    this.newsService.GetNewsList().subscribe((res) => {
      this.isLoading = false;
      this.pageLoader.hide();
      this.newsList = res;
    });
    this.newsService
      .getNewsCount()
      .then((count) => (this.totalNewsCount = count.data().count));
  }

  onPageChange(event: any) {
    if (event.first >= this.newsList.length) {
      let lastItem = this.newsList[this.newsList.length - 1];
      let limit = event.first - this.newsList.length + event.rows;

      this.newsService.GetNewsList(lastItem, limit).subscribe((res) => {
        this.newsList.push(...res);
        this.paginateStart = event.first;
        this.paginateEnd = event.first + event.rows;
      });
    } else {
      this.paginateStart = event.first;
      this.paginateEnd = event.first + event.rows;
    }
  }
}
