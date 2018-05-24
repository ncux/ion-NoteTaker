import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { NoteServiceProvider } from "../../providers/note-service/note-service";
import { NoteInterface } from "../../app/Note-Interface";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { HomePage } from "../home/home";


@IonicPage()
@Component({
  selector: 'page-new-note',
  templateUrl: 'new-note.html',
})
export class NewNotePage {

  formGroup: FormGroup;
  note: NoteInterface;
  date: Date = new Date();
  title: string = '';
  content: string = '';



  constructor(public navCtrl: NavController, private NoteService: NoteServiceProvider) {

    this.formGroup = new FormGroup({title: new FormControl(), content: new FormControl(), date: new FormControl()});

  }

  ionViewDidLoad() {

  }

  async addNewNote(note: NoteInterface) {
    await this.NoteService.saveNoteInStorage(note);
    this.navCtrl.push(HomePage);
  }




}
