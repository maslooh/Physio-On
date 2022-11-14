import { HtmlParser } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { News } from 'src/app/models/news';
import { NewsService } from 'src/app/services/news.service';
import { PageLoaderService } from 'src/app/services/page-loader.service';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.scss'],
})
export class AddNewComponent implements OnInit {
  addNewsForm: FormGroup;
  image: File;
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

  test: HtmlParser;
  constructor(
    private fb: FormBuilder,
    private pageLoader: PageLoaderService,
    private newsService: NewsService
  ) {
    this.addNewsForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', Validators.required],
      image: [''],
    });
  }

  ngOnInit(): void {}

  onAddingImage(event: any) {
    this.image = event.target.files[0];
  }

  addNews() {
    this.pageLoader.show();
    let newItem = {
      ...this.addNewsForm.value,
    } as News;

    if (this.image)
      this.newsService.uploadImage(this.image).then((path) => {
        let newItem = {
          ...this.addNewsForm.value,
        } as News;
        this.newsService.getURL(path).subscribe((res) => {
          newItem.image = res;
          this.newsService
            .addNewsItem(newItem)
            .then((_) => this.pageLoader.hide());
        });
      });
    else
      this.newsService.addNewsItem(newItem).then((_) => this.pageLoader.hide());
  }
}
