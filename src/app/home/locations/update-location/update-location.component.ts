import { Component, OnInit } from '@angular/core';
import { LoactionsService } from 'src/app/services/loactions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ClinicLocation } from 'src/app/models/location';
import { News } from 'src/app/models/news';
import { PageLoaderService } from 'src/app/services/page-loader.service';
import { Loading } from 'src/app/enums/loading';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-location',
  templateUrl: './update-location.component.html',
  styleUrls: ['./update-location.component.scss'],
})
export class UpdateLocationComponent implements OnInit {
  addLocationForm: FormGroup;
  image: File;
  isEdit: boolean = false;
  selectedLocation: ClinicLocation;
  hasChange: boolean = false;

  constructor(
    private fb: FormBuilder,
    private pageLoader: PageLoaderService,
    private locationsService: LoactionsService,
    private messageService: MessageService,
    private location: Location,
    private activatedRoute: ActivatedRoute
  ) {
    this.addLocationForm = this.fb.group({
      address: ['', [Validators.required]],
      location: [''],
      email: ['', Validators.email],
      mobile: ['', [Validators.pattern('^[0-9]{10}$')]],
      fax: ['', Validators.pattern('^[0-9]{8}$')],
      telephone: ['', Validators.pattern('^[0-9]{8}$')],
      image: [''],
    });
  }

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.isEdit = !!id;

    if (this.isEdit) {
      this.pageLoader.show(Loading.getNewsItem);
      this.locationsService.getLocationById(id).subscribe((res) => {
        this.selectedLocation = res as ClinicLocation;
        this.addLocationForm.patchValue({
          address: res?.address,
          location: res?.location,
          email: res?.email,
          mobile: res?.mobile,
          fax: res?.fax,
          telephone: res?.telephone,
        });
        this.onCreateGroupFormValueChange();
        this.pageLoader.hide(Loading.getNewsItem);
      });
    }
  }

  onCreateGroupFormValueChange() {
    const initialValue = this.addLocationForm.value;
    this.addLocationForm.valueChanges.subscribe((value) => {
      this.hasChange = Object.keys(initialValue).some(
        (key) => value[key] != initialValue[key]
      );
    });
  }

  onAddingImage(event: any) {
    this.image = event.target.files[0];
  }

  updateLocation() {
    if (this.hasChange) {
      let selectedLocationImage = this.selectedLocation.image;
      this.selectedLocation = {
        ...this.selectedLocation,
        ...this.addLocationForm.value,
        image: this.addLocationForm.get('image')?.value
          ? this.addLocationForm.get('image')?.value
          : selectedLocationImage,
      } as ClinicLocation;

      this.pageLoader.show(Loading.updateNews);

      if (this.image) {
        if (this.selectedLocation.imageRef)
          this.locationsService.deleteLocationImage(
            this.selectedLocation.imageRef
          );
        this.locationsService.uploadImage(this.image).then((path) => {
          this.selectedLocation.imageRef = path;

          this.locationsService.getURL(path).subscribe((res) => {
            this.selectedLocation.image = res;

            this.locationsService
              .updateLocation(this.selectedLocation)
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
        this.locationsService
          .updateLocation(this.selectedLocation)
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

  addLocation() {
    this.pageLoader.show(Loading.addNews);
    let location = {
      ...this.addLocationForm.value,
    } as ClinicLocation;

    if (this.image)
      this.locationsService.uploadImage(this.image).then((path) => {
        let location = {
          ...this.addLocationForm.value,
          imageRef: path,
        } as ClinicLocation;
        this.locationsService.getURL(path).subscribe((res) => {
          location.image = res;
          this.locationsService.addLocation(location).then((_) => {
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
      this.locationsService
        .addLocation(location)
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
