import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Recept } from './types/recept';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDayRecept (id: string) {
    const {appUrl} = environment;
    return this.http.get<Recept>(`${appUrl}/recept/${id}`)
  }

  getRecepts() {
    const {appUrl} = environment;
    return this.http.get<Recept[]>(`${appUrl}/recept`)
  }

  getOneRecept(id: string) {
    const {appUrl} = environment;
    return this.http.get<Recept>(`${appUrl}/recept/${id}`)
  }

  createRecept(title: string, imageUrl: string, nutrients: string, preparation: string ) {
    const {appUrl} = environment;
    return this.http.post<Recept>(`${appUrl}/recept`, {title: title, imageUrl: imageUrl, nutrients: nutrients, preparation: preparation })
  }

  editRecept(id: string, title: string, imageUrl: string, nutrients: string, preparation: string ) {
    const {appUrl} = environment;
    return this.http.put<Recept>(`${appUrl}/recept/${id}`, {title: title, imageUrl: imageUrl, nutrients: nutrients, preparation: preparation })
  }

  deleteRecept(id: string) {
    const {appUrl} = environment;
    return this.http.delete<Recept>(`${appUrl}/recept/${id}`)
  }
}
