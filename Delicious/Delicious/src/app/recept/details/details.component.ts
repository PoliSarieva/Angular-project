import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recept } from 'src/app/types/recept';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  recept: Recept | undefined;

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
  }

}
