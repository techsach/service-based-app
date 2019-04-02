import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // cached users
  private users = [
    {name: 'Bublon Bosco', email: 'bbb@bbb.com'},
    {name: 'Guglon Gosco', email: 'ggg@ggg.com'}
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

}
