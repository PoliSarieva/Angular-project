import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent{
isAuthenticating = true;

  constructor (private userService: UserService) {}

  ngOnInit(): void {
    this.userService.setProfile().subscribe({
      next: (user: any) => {
        this.isAuthenticating = false;
      },
      error: () => {
        this.isAuthenticating = false;
      }
    })
  }
}
