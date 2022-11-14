import { Injectable } from '@angular/core';
import { Loading } from '../enums/loading';

@Injectable({
  providedIn: 'root',
})
export class PageLoaderService {
  isLoading: boolean = false;
  loadingComponents: Loading[] = [];

  constructor() {}

  show(component: Loading) {
    this.loadingComponents.push(component);
    this.isLoading = true;
    document.body.classList.add('stop-scrolling');
  }
  hide(component: Loading) {
    if (this.loadingComponents.includes(component)) {
      const index = this.loadingComponents.indexOf(component);
      this.loadingComponents.splice(index, 1);
      if (this.loadingComponents.length == 0) {
        this.isLoading = false;
        document.body.classList.remove('stop-scrolling');
      }
    }
  }
}
