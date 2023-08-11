import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/types/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileDetails: User = {
    username: '',
    email: ''
  }

  form = this.fb.group({
    username: ["", [Validators.required, Validators.minLength(5)]],
    email: ["", [Validators.required], Validators.email],
  })

  constructor(private userService: UserService,
    private fb: FormBuilder, private activatedRoute: ActivatedRoute) {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {

    this.userService.setProfile().subscribe((res) => {
      this.profileDetails = res;
      console.log(res);
    }
    )

    
  }
}
