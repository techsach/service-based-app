import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = [
    {name: 'Bhushan Bosco', email: 'bbb@bbb.com'},
    {name: 'Gulshan Gosco', email: 'ggg@ggg.com'}
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

}
