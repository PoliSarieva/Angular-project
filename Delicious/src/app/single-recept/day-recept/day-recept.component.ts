import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recept } from 'src/app/types/recept';

@Component({
  selector: 'app-day-recept',
  templateUrl: './day-recept.component.html',
  styleUrls: ['./day-recept.component.css']
})
export class DayReceptComponent implements OnInit{
  recept: Recept | undefined;

  ngOnInit(): void {
    this.fetchRec();
  }

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  fetchRec(): void {
    const id = '136777f5-3277-42ad-b874-76d043b069cb';
    this.apiService.getDayRecept(id).subscribe((rec) => {
      this.recept = rec;
    })
  }
}
