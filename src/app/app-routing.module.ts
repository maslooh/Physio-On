import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './core/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsComponent } from './news/news/news.component';
import { ServiceItemComponent } from './our-services/service-item/service-item.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'services/:id',
    component: ServiceItemComponent,
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'news/:id',
    component: NewsItemComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
