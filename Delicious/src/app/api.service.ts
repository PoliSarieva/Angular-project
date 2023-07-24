import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Recept } from './types/recept';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getRecepts() {
    const {appUrl} = environment;
    return this.http.get<Recept[]>(`${appUrl}/recept`)
  }

  getOneRecept(id: string) {
    const {appUrl} = environment;
    return this.http.get<Recept>(`${appUrl}/recept/${id}`)
  }
}
