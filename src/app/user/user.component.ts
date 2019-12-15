import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtUtil } from '../utility/jwtUtil';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.username = jwtUtil.getUsername(localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
