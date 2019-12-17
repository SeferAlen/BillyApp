import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors  } from '@angular/forms';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
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

  constructor(private fb: FormBuilder, private userService: UserService) { }

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
    this.userService.changePassword(this.passwordForm['controls'].passwordGroup['controls'].password.value)
    .subscribe(
      (response: any) => {
        if (response.status == 202) {
          popUp.createFailed('Failed', 'Password same as old one. Please chose another password');
        } else if (response.status == 200) {
          popUp.createSuccess('Success', 'Password changed');  
        } else {
          popUp.createError('Error', 'Unknown error');
        }
      }, 
      (error: any) => {
        console.log("Error !!! -> " + error);
        popUp.createError('Error', 'Error has occurred');
      }
    );
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

  return !valid ? { 'passwordOK': true } : null;
};
