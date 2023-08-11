import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-recept',
  templateUrl: './edit-create.component.html',
  styleUrls: ['./edit-create.component.css']
})
export class EditCreateReceptComponent implements OnInit {
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
        this.router.navigate(['/main-recept']);
      });
  }

  editRecept() {
    const id = this.activatedRoute.snapshot.params['id'];
    const { title, imageUrl, nutrients, preparation } = this.form.value;

    this.apiService.editRecept(id, title!, imageUrl!, nutrients!, preparation!)
      .subscribe(() => {
        this.router.navigate([`/main-recept/${id}`]);
      });
  }

}
