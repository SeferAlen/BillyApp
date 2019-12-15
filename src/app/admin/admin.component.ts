import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtUtil } from '../utility/jwtUtil';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
