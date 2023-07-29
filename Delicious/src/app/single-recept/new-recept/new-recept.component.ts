import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-recept',
  templateUrl: './new-recept.component.html',
  styleUrls: ['./new-recept.component.css']
})
export class NewReceptComponent {
  constructor(private fb: FormBuilder, 
              private apiService: ApiService,
              private router: Router) {}

  form = this.fb.group({
    title: ["", [Validators.required]],
    imageUrl: ["", [Validators.required]],
    nutrients: ["", [Validators.required]],
    preparation: ["", [Validators.required]],
    
  })

  

  newReceptSubmit(form: FormGroup): void {
    
    if (form.invalid) {
      return;
    }

    const {title, imageUrl, nutrients, preparation } = this.form.value;
  
    this.apiService.createRecept(title!, imageUrl!, nutrients!, preparation! )
      .subscribe(() => {
        this.router.navigate(['/']);
      })
  }
}
