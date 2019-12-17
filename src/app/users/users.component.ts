import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { User } from '../interface/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users: User[];
  @Output() onUserSelected: EventEmitter<any> = new EventEmitter<any>();
  selected = -1;

  constructor() { }

  ngOnInit() {
  }

  userSelected(id) {
    this.onUserSelected.emit(id);
  }
}
