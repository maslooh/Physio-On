import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { PageLoaderService } from 'src/app/services/page-loader.service';
import { Loading } from 'src/app/enums/loading';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  addNewsForm: FormGroup;
  image: File;
  isEdit: boolean = false;
  selectedNewsItem: News;

  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'], // toggled buttons
      ['blockquote', 'link', 'image'],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }], // superscript/subscript
      [{ indent: '-1' }, { indent: '+1' }], // outdent/indent
      [{ direction: 'rtl' }], // text direction

      [{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ font: [] }],
      [{ align: [] }],

      ['clean'], // remove formatting button
    ],
  };

  constructor(
    private fb: FormBuilder,
    private pageLoader: PageLoaderService,
    private newsService: NewsService,
    private messageService: MessageService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.addNewsForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required],
      image: [''],
    });
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isEdit = !!id;
    if (this.isEdit) {
      this.pageLoader.show(Loading.getNewsItem);
      this.newsService.getNewsItemById(id).subscribe((res) => {
        this.selectedNewsItem = res as News;
        this.addNewsForm.patchValue({
          title: res?.title,
          content: res?.content,
        });
        this.pageLoader.hide(Loading.getNewsItem);
      });
    }
  }

  onAddingImage(event: any) {
    this.image = event.target.files[0];
  }

  updateNews() {
    if (this.valueChanged()) {
      this.selectedNewsItem = {
        ...this.selectedNewsItem,
        title: this.addNewsForm.value.title,
        content: this.addNewsForm.value.content,
      } as News;
      this.pageLoader.show(Loading.updateNews);

      if (this.image) {
        this.newsService.deleteNewsImage(this.selectedNewsItem.imageRef);
        this.newsService.uploadImage(this.image).then((path) => {
          this.selectedNewsItem.imageRef = path;

          this.newsService.getURL(path).subscribe((res) => {
            this.selectedNewsItem.image = res;

            this.newsService
              .updateNewsItem(this.selectedNewsItem)
              .then((_) => {
                this.messageService.add({
                  severity: 'success',
                  summary: 'Success',
                  detail: 'Item updated',
                });
                this.pageLoader.hide(Loading.updateNews);
                this.location.back();
              })
              .catch((err) => {
                this.messageService.add({
                  severity: 'error',
                  summary: 'Error',
                  detail: err,
                });
                this.pageLoader.hide(Loading.updateNews);
              });
          }); //end
        });
      } else {
        this.newsService
          .updateNewsItem(this.selectedNewsItem)
          .then((_) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Item updated',
            });
            this.pageLoader.hide(Loading.updateNews);
            this.location.back();
          })
          .catch((err) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: err,
            });
            this.pageLoader.hide(Loading.updateNews);
          });
      }
    } else {
      this.location.back();
    }
  }

  valueChanged() {
    return (
      this.selectedNewsItem.title != this.addNewsForm.get('title')?.value ||
      this.selectedNewsItem.content != this.addNewsForm.get('content')?.value ||
      this.image
    );
  }

  addNews() {
    this.pageLoader.show(Loading.addNews);
    let newItem = {
      ...this.addNewsForm.value,
    } as News;

    if (this.image)
      this.newsService.uploadImage(this.image).then((path) => {
        let newItem = {
          ...this.addNewsForm.value,
          imageRef: path,
        } as News;
        this.newsService.getURL(path).subscribe((res) => {
          newItem.image = res;
          this.newsService.addNewsItem(newItem).then((_) => {
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Item added',
            });
            this.pageLoader.hide(Loading.addNews);
            this.location.back();
          });
        });
      });
    else
      this.newsService
        .addNewsItem(newItem)
        .then((_) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Item added',
          });
          this.pageLoader.hide(Loading.addNews);
          this.location.back();
        })
        .catch((err) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err,
          });
          this.pageLoader.hide(Loading.addNews);
        });
  }
}
