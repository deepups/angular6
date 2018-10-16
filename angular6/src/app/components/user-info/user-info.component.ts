import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../model/model.user';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
    title = 'User Info';
    constructor(private userService: UserService) {
      this
        .userService
        .getUsers()
        .subscribe((data: User[]) => {
          this.result = data;
        });
     }
    result:User[];
    ngOnInit() {
      
    }

}