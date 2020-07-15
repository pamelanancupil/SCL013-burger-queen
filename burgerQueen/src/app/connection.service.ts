import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Command { name: string; }

@Injectable({
  providedIn: 'root'
})
export class ConnectionService  {
  private commandsCollection: AngularFirestoreCollection<Command>;
  commands: Observable<Command[]>;

  constructor(private afs: AngularFirestore) {
    this.commandsCollection = afs.collection<Command>('commands');
    this.commands = this.commandsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Command;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  commandChef(){
    return this.commands;
  }
  addCommand(command: Command){
    this.commandsCollection.add(command);
  }
}
