import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewNotePage } from "../new-note/new-note";
import { NoteServiceProvider } from "../../providers/note-service/note-service";
import { NoteInterface } from "../../app/Note-Interface";
import { NoteDetailsPage } from "../note-details/note-details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private note: NoteInterface;

  private NOTES: NoteInterface[];

  constructor(public navCtrl: NavController, private NoteService: NoteServiceProvider) {  }

  async ionViewWillEnter(){
    this.NOTES = await this.getAllNotes();
  }


  goToNewNotePage() {
    this.navCtrl.push(NewNotePage);
  }


  getAllNotes() {
    return this.NoteService.retrieveNotesFromStorage();
  }


  async viewNoteDetails(timeStamp: number) {
    this.note = await this.NoteService.viewNoteDetails(timeStamp);
    this.navCtrl.push(NoteDetailsPage, {note: this.note});
  }

}
