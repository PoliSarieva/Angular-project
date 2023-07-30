import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "src/app/api.service";
import { Recept } from 'src/app/types/recept';
import { map } from "rxjs/operators";
import { collectionChanges, collection } from "@angular/fire/firestore";

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.css']
})
export class AppetizersComponent implements OnInit {

  receptList?: Recept[];
  currentRecept?: Recept;
  currentIndex = -1;
  title = '';

  constructor(private apiService: ApiService) { }

  

  ngOnInit(): void {
    this.retrieveRecepts();
  }

  refreshList(): void {
    this.currentRecept = undefined;
    this.currentIndex = -1;
    this.retrieveRecepts();
  }

  retrieveRecepts(): void {
    this.apiService.getAll().snapshotChanges()
      .pipe(
        map((changes) => changes.map(
              c => ({
              _id: c.payload.key, ...c.payload.val()
            })
        )
        )
      ).subscribe((data) => {
        this.receptList = data;
      });
  }












  //receptList: Recept[] = [];
  /*items:any;

   constructor(private blogService: ApiService, private route: ActivatedRoute) {
      this.route.params.subscribe(params=> {
      this.items=this.blogService.getObjectById(params['id']).subscribe((rec) => {
      
        this.items = rec;
    }));
   };
   }*/


  //constructor(private apiService: ApiService) {}

  /*ngOnInit(): void {
    const data = this.apiService.getRecepts().subscribe((rec) => {
      
      this.receptList = rec;
    })*/




}

