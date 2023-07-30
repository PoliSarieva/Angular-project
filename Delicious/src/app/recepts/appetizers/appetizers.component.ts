import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";
import { Recept } from 'src/app/types/recept';

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.css']
})
export class AppetizersComponent implements OnInit{
  receptList: Recept[] = [];
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const data = this.apiService.getRecepts().subscribe((rec) => {
      
      this.receptList = rec;
    })
      
      
   
   
  }
}
