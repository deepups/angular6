import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-repo-user',
  templateUrl: './repo-user.component.html',
  styleUrls: ['./repo-user.component.css']
})
export class RepoUserComponent implements OnInit {

  constructor(private repoUser:UserService) { }
  result;
  ngOnInit() {
      this
        .repoUser
        .getRepoUserDetails()
        .subscribe((data: UserService[]) => {
          this.result = data;
        });
  }

}
