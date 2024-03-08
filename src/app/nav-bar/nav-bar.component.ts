import { Component } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(private usersServices: UsersService){}
  loginStatus : boolean | undefined;
  ngOnInit(): void {
    this.loginStatus = this.usersServices.isLogged();
  }
}
