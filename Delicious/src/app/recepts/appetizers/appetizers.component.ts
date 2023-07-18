import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/api.service";

@Component({
  selector: 'app-appetizers',
  templateUrl: './appetizers.component.html',
  styleUrls: ['./appetizers.component.css']
})
export class AppetizersComponent implements OnInit{
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const data = this.apiService.getRecepts().subscribe((rec) => {
      console.log(rec);
    })
      
      
   
   
  }
}
