import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoteServiceProvider } from "../../providers/note-service/note-service";
import { NoteInterface } from "../../app/Note-Interface";



@IonicPage()
@Component({
  selector: 'page-note-details',
  templateUrl: 'note-details.html',
})
export class NoteDetailsPage {

  note: NoteInterface;

  constructor(public navCtrl: NavController, public navParams: NavParams, private NoteService: NoteServiceProvider) {
    this.note = this.navParams.get('note');
  }

  ionViewDidLoad() {

  }


  async deleteNote(timestamp: number) {
    await this.NoteService.deleteNoteFromStorage(timestamp);
    this.navCtrl.pop();   // go to previous page

  }

}
