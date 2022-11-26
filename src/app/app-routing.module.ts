import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddNewComponent } from './news/add-new/add-new.component';
import { NewsHomeComponent } from './news/home/news.home.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsComponent } from './news/news/news.component';
import { ServiceItemComponent } from './our-services/service-item/service-item.component';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/compat/auth-guard';
import { UpdateLocationComponent } from './home/locations/update-location/update-location.component';

const redirectUnauthorizedToHome = () => redirectUnauthorizedTo(['']);

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
    path: 'locations/add',
    component: UpdateLocationComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHome,
    },
  },
  {
    path: 'locations/update/:id',
    component: UpdateLocationComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorizedToHome,
    },
  },
  {
    path: 'news',
    component: NewsHomeComponent,
    children: [
      {
        path: 'list',
        component: NewsComponent,
      },
      {
        path: 'add',
        component: AddNewComponent,
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToHome,
        },
      },
      {
        path: 'update/:id',
        component: AddNewComponent,
        canActivate: [AngularFireAuthGuard],
        data: {
          authGuardPipe: redirectUnauthorizedToHome,
        },
      },
      {
        path: ':id',
        component: NewsItemComponent,
      },
    ],
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
