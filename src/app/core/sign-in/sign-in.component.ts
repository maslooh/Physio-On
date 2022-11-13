import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/services/auth.service';

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
    private dialogRef: DynamicDialogRef
  ) {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  signIn(signInValue: any) {
    this.authService
      .signIn(signInValue)
      .then((cred) => {
        this.dialogRef.close();
      })
      .catch((err) => (this.signInError = true));
  }
}
