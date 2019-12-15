import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtUtil } from '../utility/jwtUtil';
import { popUp } from '../utility/popUp';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router, private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
        username: ['', [
          Validators.required]],
        password: ['', [
          Validators.required,
          Validators.minLength(8)]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.loginService.login(this.loginForm.value.username, this.loginForm.value.password)
    .subscribe(
      (response: any) => {
        localStorage.setItem("token", response);

        let role = this.authService.getUserRole();
        if (role == "Admin") {
          this.router.navigate(['adminPage']);
        } else if (role == "User") {
          this.router.navigate(['userPage']);
        }     
      }, 
      (error: any) => {
      }
    );
  }
}
