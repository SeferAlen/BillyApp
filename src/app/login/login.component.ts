import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private _loginSerivce: LoginService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
        username: ['', [
          Validators.required]],
        password: ['', [
          Validators.required,
          Validators.minLength(8)]]
    });
    console.log("Started");
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this._loginSerivce.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(
      (response: any) => {
        console.log("OK");
        console.log(response)
      }, 
      (error: any) => {
        console.log("Error");
        console.log(error.error)
        this.dialogError(error.error);
      }
    );
  }

  dialogError(message: string): void {
    let dialogRef = this.dialog.open(AlertDialogComponent, {
      disableClose: true,
      data: {
        msg: message
      }
    });
  }
}
