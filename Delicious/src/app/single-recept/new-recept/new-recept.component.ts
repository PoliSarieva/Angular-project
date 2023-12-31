import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-recept',
  templateUrl: './new-recept.component.html',
  styleUrls: ['./new-recept.component.css']
})
export class NewReceptComponent implements OnInit {
  form!: FormGroup;
  //id: string;
  isAddMode!: boolean;
  //loading = false;
  submitted = false;

  constructor(private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.isAddMode = !id;

    this.form = this.fb.group({
      title: ["", [Validators.required]],
      imageUrl: ["", [Validators.required]],
      nutrients: ["", [Validators.required]],
      preparation: ["", [Validators.required]],

    })

    if (!this.isAddMode) {
      this.apiService.getOneRecept(id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x));
    }

    //get f() {return this.form.controls}

  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) { return; }

    if (this.isAddMode) {
      this.createRecept();
    } else {
      this.editRecept();
    }
  }

  createRecept() {
    const { title, imageUrl, nutrients, preparation } = this.form.value;

    this.apiService.createRecept(title!, imageUrl!, nutrients!, preparation!)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  editRecept() {
    const id = this.activatedRoute.snapshot.params['id'];
    const { title, imageUrl, nutrients, preparation } = this.form.value;

    this.apiService.editRecept(id, title!, imageUrl!, nutrients!, preparation!)
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

}
