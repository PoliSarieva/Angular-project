import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Recept } from 'src/app/types/recept';

@Component({
  selector: 'app-day-recept',
  templateUrl: './day-recept.component.html',
  styleUrls: ['./day-recept.component.css']
})
export class DayReceptComponent implements OnInit {
  recept: Recept | undefined;
  receptList: Recept[] = [];
  idArray: string[] = [];

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.apiService.getRecepts().subscribe((rec: any) => {
      this.receptList = rec;

      this.receptList.map((rec) => {
        this.idArray.push(rec._id);
      });

      const randomId = this.idArray[Math.floor(Math.random() * this.idArray.length)];

      this.apiService.getDayRecept(randomId).subscribe((rec) => {
        this.recept = rec;
      })

    })

  }
}
