import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Recept } from "./types/recept";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRecepts () {
    const dbUrl = environment.firebase.databaseURL;
    
    return this.http.get<Recept[]>(`${dbUrl}/recepts/appetizers.json`);
  }

  getRecept (id:any) {
    const dbUrl = environment.firebase.databaseURL;
    
    //console.log(this.http.get<Recept>(`https://angular-project-89768-default-rtdb.europe-west1.firebasedatabase.app/recepts/appetizers/:5646545725.json`));
    return this.http.get<Recept>(`https://angular-project-89768-default-rtdb.europe-west1.firebasedatabase.app/recepts/appetizers/${id}.json`);
  }

}
