import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { Recept } from "./types/recept";
import { getDatabase,  } from "@angular/fire/database";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Firestore, collection, collectionChanges } from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
   dbUrl = environment.firebase.databaseURL;
  private dbPath = `/recepts/appetizers`;

 /* getRecepts () {
    const dbUrl = environment.firebase.databaseURL;
    
    return this.http.get<Recept[]>(`${dbUrl}/recepts/appetizers.json`);
  }*/

  recRef: AngularFireList<Recept>;

  constructor(private http: HttpClient, private db: AngularFireDatabase) {
      this.recRef = db.list(this.dbPath);
   }

   getAll(): AngularFireList<Recept> {
    return this.recRef;
   }

   create(recept: Recept): any {
    return this.recRef.push(recept);
   }

   update(id: string, value: any): Promise<void> {
    return this.recRef.update(id, value);
   }

   delete(id: string): Promise<void> {
    return this.recRef.remove();
   }












  /*recCollection = collection(this.db, 'recepts'); 

  getAllUsers() {
    return new Promise<any>((resolve)=> {
      collectionChanges(this.recCollection)
      .subscribe(users => resolve(users));
    })
}

  getRecepts () {
    const dbUrl = environment.firebase.databaseURL;
    
    return this.http.get<Recept[]>(`${dbUrl}/recepts/appetizers.json`);
  }*/

  /*getObjectById(id) { 
    return this.afs.collection('collectionName').doc(id).valueChanges()
}*/

  //*/getRecept (id: string) {
    //const dbUrl = environment.firebase.databaseURL;
    /*const db = getDatabase();
    console.log(db);
    
    const ref = db.('server/saving-data/fireblog/posts');*/

// Attach an asynchronous callback to read the data at our posts reference
/*ref.on('value', (snapshot) => {
  console.log(snapshot.val());
}, (errorObject) => {
  console.log('The read failed: ' + errorObject.name);
}); */
    //console.log(this.http.get<Recept>(`https://angular-project-89768-default-rtdb.europe-west1.firebasedatabase.app/recepts/appetizers/:01.json`));
                                       //https://angular-project-89768-default-rtdb.europe-west1.firebasedatabase.app/recepts/appetizers/01
   // return this.http.get<Recept>(`https://angular-project-89768-default-rtdb.europe-west1.firebasedatabase.app/recepts/appetizers/${id}.json`);
  //}

}
