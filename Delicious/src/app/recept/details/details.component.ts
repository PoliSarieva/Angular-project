import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recept } from 'src/app/types/recept';
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore/document/document";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() tutorial?: Recept;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentRecept: Recept = {
    _id: '',
    title: '',
    img: '',
    nutrients: '',
    preparation: '',
  };
  message = '';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
   // this.currentRecept = { ...this.tutorial };
  }

  /*recept: Recept | undefined;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchRecept();
  }

  fetchRecept():void {
    const id=this.activatedRoute.snapshot.params['id'];
    this.apiService.getRecept(id).subscribe(recept => {
      this.recept = recept;
      console.log(recept);
      
    })
  }*/

}
