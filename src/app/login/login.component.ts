import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
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
  }
}
