import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recept } from 'src/app/types/recept';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  recept: Recept | undefined;

  ngOnInit(): void {
    this.fetchRec();
  }

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  fetchRec(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.apiService.getOneRecept(id).subscribe((rec) => {
      this.recept = rec;
    })
  }
}
