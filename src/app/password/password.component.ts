import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors  } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtUtil } from '../utility/jwtUtil';
import { popUp } from '../utility/popUp';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PasswordComponent implements OnInit {

  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.passwordForm = this.fb.group({
      passwordGroup: this.fb.group({
        password: ['', [Validators.required,Validators.minLength(8)]],
        confirm: ['', [Validators.required,Validators.minLength(8)]]
      }, { validators: passwordOKValidator })
    });
  }

  get password() {
    return this.passwordForm.get('password');
  }

  get confirm() {
    return this.passwordForm.get('confirm');
  }

  onSubmit() {
    console.log(this.passwordForm['controls'].passwordGroup['controls'].password.value);
  }

  menuClicked() {
    this.passwordForm.reset();
    this.passwordForm.markAsPristine();
    this.passwordForm.markAsUntouched();
    this.passwordForm.updateValueAndValidity();
  }
}

export const passwordOKValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirm = control.get('confirm');

  let valid = false;

  if (password.value === confirm.value) valid = true;

  console.log(valid);
  return !valid ? { 'passwordOK': true } : null;
};
