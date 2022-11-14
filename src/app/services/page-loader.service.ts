import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PageLoaderService {
  isLoading: boolean = false;

  constructor() {}

  show() {
    this.isLoading = true;
    document.body.classList.add("stop-scrolling");
  }
  hide() {
    this.isLoading = false;
    document.body.classList.remove("stop-scrolling");
  }
}
