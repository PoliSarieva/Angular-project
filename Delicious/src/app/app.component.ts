import { Component, inject, OnInit } from '@angular/core';
import { Firestore, collection, collectionData, collectionChanges } from "@angular/fire/firestore";
import { map, Observable } from "rxjs";
import { environment } from "../environments/environment";
import { initializeApp } from "@angular/fire/app";
//import { getFirestore } from "@angular/fire/firestore";
//const { initializeApp, applicationDefault, cert } = require('@angular/fire/app');
//const { getFirestore, Timestamp, FieldValue, Filter } = require('@angular/fire/firestore');
import {getDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Delicious';
  firestore: Firestore = inject(Firestore);
  item$: Observable<any[]>;

  constructor(private store: Firestore) {
    /*const aCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(aCollection);*/

  const aCollection = collection(this.firestore, 'items');
   const changeCollect = this.item$ = collectionChanges(aCollection)
    .pipe(
      map(
        (items) => items.map(
          (item) =>{
            const data = item.doc.data();
            const id = `idprefix-${item.doc.id}`;
            return { id, ...data };
          }
        )
      )
    )


/*const aCollection = collection(this.firestore, 'items').valueChanges({ idField: 'id' }));
    this.item$ = collectionData(aCollection);*/

 /*const todo = this.item$.collection('todo').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  inProgress = this.store.collection('inProgress').valueChanges({ idField: 'id' }) as Observable<Task[]>;
  done = this.store.collection('done').valueChanges({ idField: 'id' }) as Observable<Task[]>;
*/
  }

  /*ngOnInit(){
    this.getAll();
  }
  dataSource : any;
  
  getAll(){
    this.store.collection('userInfo').snapshotChanges().subscribe((response) => {
        this.dataSource = response.map(item => 
          Object.assign({id : item.payload.doc.id}, item.payload.doc.data())
        );
      })
    }*/
ngOnInit(): void {
  //
}
    

  
   
    }

  

  // Get a database reference to our posts
/*const db = getDatabase();
 console.log(db); */
 
//const ref = db.ref('server/saving-data/fireblog/posts');

// Attach an asynchronous callback to read the data at our posts reference
/*ref.on('value', (snapshot) => {
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
});*/

  
  

