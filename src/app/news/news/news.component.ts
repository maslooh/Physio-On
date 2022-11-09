import { Component, Input, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() hasMoreNewsBtn: boolean =false;
  @Input() hasPagination:boolean=false
  window = window;
  newsList: News[];
  isLoggedIn: boolean = false;

  constructor(private newsService: NewsService, public authService: AuthService) {
  }

  ngOnInit(): void {
    this.newsService.GetNewsList().subscribe((res) => {
      this.newsList = res;
    });
  }

  next(){
    this.newsService.GetNewsList(this.newsList[this.newsList.length-1]).subscribe((res) => {
      console.log(res)
    });
  }
}
