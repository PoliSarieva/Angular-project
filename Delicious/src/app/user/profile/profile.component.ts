import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.Profile();
  }

   Profile(): void {
    this.userService.getProfile().subscribe((data: any) => 
      console.log(`Data: ${data}`)
    )
  }
}
