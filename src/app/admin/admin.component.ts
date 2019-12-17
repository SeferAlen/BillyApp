import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtUtil } from '../utility/jwtUtil';
import { User } from '../interface/User';
import { Bill } from '../interface/Bill';
import { BillsService } from '../services/bill.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  username: string;
  users: User[];
  bills: Bill[];

  constructor(private router: Router, private userService: UserService, private billsService: BillsService) { }

  ngOnInit() {
    this.username = jwtUtil.getUsername(localStorage.getItem('token'));
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe(
      (response: any) => {
        this.users = response.body;
      }, 
      (error: any) => {
        console.log("Error !!! -> " + error);
        popUp.createError('Error', 'Error has occurred');
      }
    )
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getUserBills(id) {
    this.billsService.getBillsById(id).subscribe((
      (bills) => {
        this.bills = bills;
        console.log(bills);
      }, 
      (error: any) => {
        console.log("Error !!! -> " + error);
        popUp.createError('Error', 'Error has occurred');
      }
    ))
  }
}
