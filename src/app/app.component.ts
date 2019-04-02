import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Service based app';

  constructor(private usersService: UsersService) {
  }

  getUsers() {
    return this.usersService.getUsers();
  }

}
