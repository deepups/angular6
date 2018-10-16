import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  

  constructor(private http: HttpClient) { }

  getUsers() {
    let url = 'https://jsonplaceholder.typicode.com';
    return this
            .http
            .get(url+'/users');
  }

  getRepoUserDetails(){
    let url = 'https://api.github.com/users/wycats';
    return this
            .http
            .get(url);
  }

  getReposOfUser(){
    let url = 'https://api.github.com/users/wycats/repos';
    return this
            .http
            .get(url);
  }

}
