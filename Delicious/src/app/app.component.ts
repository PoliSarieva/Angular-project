import { Component, inject } from '@angular/core';
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Delicious';
  firestore: Firestore = inject(Firestore);
  item$: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(aCollection);
  }
}
