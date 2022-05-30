import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
  }
  getUsers(): void{
    this.userservice.getUsers().subscribe(response => {
      this.users = response;
    })
  }

}
