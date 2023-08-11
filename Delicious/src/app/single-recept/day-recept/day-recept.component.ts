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
  receptList: Recept[] = [];
  idArray: string[] = [];
  id: string = '';

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) {
    /*this.apiService.getRecepts().subscribe((rec: any) => {
      this.receptList = rec;
      
      for (let i = 0; i < this.receptList.length; i++) {
        let element = this.receptList[i]._id;
        this.idArray.push(element);
      }

     // console.log(this.idArray[Math.floor(Math.random()*this.idArray.length)]);
      this.id = this.idArray[Math.floor(Math.random()*this.idArray.length)];
      //return this.idArray[Math.floor(Math.random()*this.idArray.length)];
    })*/
   }

   getId() {
    console.log(this.id);
    
   }
   

  ngOnInit(): void {
   // let idA = this.randomId();
    //console.log('idA '+idA);
    this.apiService.getRecepts().subscribe((rec: any) => {
      this.receptList = rec;
      
      this.receptList.map((rec) => {
        this.idArray.push(rec._id)
      })})
      console.log(this.idArray);
    //const  randomId = this.idArray[Math.floor(Math.random()*this.idArray.length)];
    let randomId = this.idArray.length;
    console.log('id1 '+randomId);
    //const id = '136777f5-3277-42ad-b874-76d043b069cb';
    this.apiService.getDayRecept(this.id).subscribe((rec) => {
      
      this.recept = rec;
    })
   
    //this.fetchRec();
   // this.allRecept();
  }

  

  
}
