import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NoteInterface } from "../../app/Note-Interface";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NoteServiceProvider {

  private note: NoteInterface;

  NOTES: NoteInterface[];

  constructor(private storage: Storage, private http: HttpClient) {  }

  async saveNoteInStorage(note: NoteInterface) {
    note.timeStamp = Date.now();
    this.NOTES = await this.storage.get('NOTES') || [];
    this.NOTES.push(note);
    this.storage.set('NOTES', this.NOTES);
  }


   async retrieveNotesFromStorage() {
     let NOTES = await this.storage.get('NOTES');
        if (NOTES == null) {
          this.NOTES = [];
        } else {
          this.NOTES = NOTES;
        }
       return this.NOTES.slice();  // return a copy of the array
   }


   async viewNoteDetails(timeStamp: number) {
     this.NOTES = await this.storage.get('NOTES') || [];
     return this.note = this.NOTES.slice().find(note => note.timeStamp == timeStamp);
   }


   async deleteNoteFromStorage(timeStamp: number) {
     this.NOTES = await this.storage.get('NOTES') || [];
     this.NOTES = this.NOTES.filter(note => note.timeStamp != timeStamp);
     this.storage.set('NOTES', this.NOTES);
   }

}
