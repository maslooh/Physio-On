import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Loading } from 'src/app/enums/loading';
import { News } from 'src/app/models/news';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';
import { PageLoaderService } from 'src/app/services/page-loader.service';
import { ConfirmationService } from 'primeng/api';
import { Router } from '@angular/router';

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
  paginateEnd: number = 6; //exclusive
  totalNewsCount: number;
  responsiveOptions:any[];

  constructor(
    private newsService: NewsService,
    public authService: AuthService,
    public pageLoader: PageLoaderService,
    private messageService: MessageService,
    private dialogService: ConfirmationService,
    private router: Router
  ) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {
    this.pageLoader.show(Loading.newsList);
    this.newsService.GetNewsList(6).subscribe((res) => {
      this.isLoading = false;
      this.pageLoader.hide(Loading.newsList);
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

      this.newsService.GetNewsList(limit, lastItem).subscribe((res) => {
        this.newsList.push(...res);
        this.paginateStart = event.first;
        this.paginateEnd = event.first + event.rows;
      });
    } else {
      this.paginateStart = event.first;
      this.paginateEnd = event.first + event.rows;
    }
  }

  showDialog(newsItem: News) {
    this.dialogService.confirm({
      message: 'Are you sure you want to delete this item?',
      header: 'Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteNews(newsItem);
      },
    });
  }

  deleteNews(newsItem: News) {
    this.pageLoader.show(Loading.deleteNews);
    this.newsService
      .deleteNewsItem(newsItem)
      .then((_) => {
        if (newsItem.image)
          this.newsService.deleteNewsImage(newsItem.imageRef).subscribe({
            next: (_) => {
              this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Item deleted',
              });
              this.pageLoader.hide(Loading.deleteNews);
            },
            error: (err) => {
              this.messageService.add({
                severity: 'error',
                summary: 'Error',
                detail: err,
              });
              this.pageLoader.hide(Loading.deleteNews);
            },
          });
        else {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Item deleted',
          });
          this.pageLoader.hide(Loading.deleteNews);
        }
      })
      .catch((err) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: err,
        });
        this.pageLoader.hide(Loading.deleteNews);
      });
  }

  navigateToEdit(id: string) {
    this.router.navigate([`news/update/${id}`]);
  }
}
