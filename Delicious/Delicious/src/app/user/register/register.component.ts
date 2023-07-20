import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from "@angular/forms";
import { matchPasswordsValidator } from '../validators/match-pass-validators';

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

  constructor (private fb: FormBuilder) {}

  onSubmit() {
    console.log(this.form.value);
    
  }
}
