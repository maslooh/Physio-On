import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Loading } from 'src/app/enums/loading';
import { AuthService } from 'src/app/services/auth.service';
import { PageLoaderService } from 'src/app/services/page-loader.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  signInError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private dialogRef: DynamicDialogRef,
    private pageLoader: PageLoaderService
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false],
    });
  }

  ngOnInit(): void {}

  signIn(signInValue: any) {
    this.pageLoader.show(Loading.signIn);
    this.authService
      .signIn(signInValue)
      .then((cred) => {
        this.pageLoader.hide(Loading.signIn);
        this.dialogRef.close();
      })
      .catch((err) => {
        this.signInError = true;
        this.pageLoader.hide(Loading.signIn);
      });
  }
}
