import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { matchPasswordsValidator } from '../validators/match-pass-validators';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    username: ["", [Validators.required, Validators.minLength(4)]],
    passGroup: this.fb.group({
      password: ["", [Validators.required, Validators.minLength(6)]],
      rePassword: ["", [Validators.required]]
    },
      {
        validators: [matchPasswordsValidator('password', 'rePassword')]
      }
    )
  });

  constructor(private fb: FormBuilder, private userService: UserService,private router: Router) { }

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    const { email, username, passGroup: { password, rePassword } = {} } = this.form.value;
    this.userService.register(email!, username!, password!, rePassword!)
      .subscribe(user => {
        this.userService.user = user;
  
        
        this.router.navigate(['/']);
      }
      );



  }
}
