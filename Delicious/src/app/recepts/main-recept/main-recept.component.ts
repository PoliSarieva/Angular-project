import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Recept } from 'src/app/types/recept';

@Component({
  selector: 'app-main-recept',
  templateUrl: './main-recept.component.html',
  styleUrls: ['./main-recept.component.css']
})
export class MainReceptComponent implements OnInit{
  constructor(private apiService: ApiService) { }
  receptList: Recept[] = [];

  ngOnInit(): void {
    this.apiService.getRecepts().subscribe((rec) => {
      this.receptList = rec;
    }
    )
  }
}
