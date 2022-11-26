import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Loading } from 'src/app/enums/loading';
import { AuthService } from 'src/app/services/auth.service';
import { LoactionsService } from 'src/app/services/loactions.service';
import { PageLoaderService } from 'src/app/services/page-loader.service';
import { ClinicLocation } from '../../models/location';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss'],
})
export class LocationsComponent implements OnInit {
  locations: ClinicLocation[];

  constructor(
    private locationsService: LoactionsService,
    public pageLoader: PageLoaderService,
    public authService: AuthService,
    private messageService: MessageService,
    private dialogService: ConfirmationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pageLoader.show(Loading.locationsList);
    this.locationsService.GetLocationsList().subscribe((res) => {
      this.pageLoader.hide(Loading.locationsList);
      this.locations = res;
      this.locationsService.locations = res;
    });
  }

  navigateToEdit(id: string) {
    this.router.navigate([`locations/update/${id}`]);
  }

  showDialog(location: ClinicLocation) {
    this.dialogService.confirm({
      message: 'Are you sure you want to delete this item?',
      header: 'Delete',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteLocation(location);
      },
    });
  }

  deleteLocation(location: ClinicLocation) {
    this.pageLoader.show(Loading.deleteNews);
    this.locationsService
      .deleteLocation(location)
      .then((_) => {
        if (location.image)
          this.locationsService.deleteLocationImage(location.imageRef).subscribe({
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

}
