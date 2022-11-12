import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ReCaptchaEnterpriseProvider } from 'firebase/app-check';
import { limit } from 'firebase/firestore';
import { last } from 'rxjs';
import { News } from 'src/app/models/news';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewsComponent implements OnInit {
  @Input() hasMoreNewsBtn: boolean = false;
  @Input() hasPagination: boolean = true;
  window = window;
  newsList: News[];
  isLoggedIn: boolean = false;
  paginateStart: number = 0; //inclusive
  paginateEnd: number = 3; //exclusive
  totalNewsCount: number;

  constructor(
    private newsService: NewsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.newsService.GetNewsList().subscribe((res) => {
      this.newsList = res;
    });
    this.newsService
      .getNewsCount()
      .then((count) => (this.totalNewsCount = count.data().count));
  }

  next(lastItem?: News, limit: number = 3) {}

  onPageChange(event: any) {
    console.log(event);

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
