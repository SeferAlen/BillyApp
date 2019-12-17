import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jwtUtil } from '../utility/jwtUtil';
import { Bill } from '../interface/Bill';
import { BillsService } from '../services/bill.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  username: string;
  bills: Bill[];

  constructor(private router: Router, private billService: BillsService) { }

  ngOnInit() {
    this.username = jwtUtil.getUsername(localStorage.getItem('token'));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  getBills() {
    this.billService.getBillsByUsername(this.username).subscribe((
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
