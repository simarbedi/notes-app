import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
    providedIn: 'root',
})
export class NotesService {
    notes: Note[] = new Array<Note>();
    constructor() {}

    async getAll(): Promise<Note[]> {
        return new Promise((req, res) => {
            return this.notes;
        });
    }
    // get(id: number) {
    //     return this.notes[id];
    // }

    // getId(note: Note) {
    //     this.notes.indexOf(note);
    // }

    async add(note: Note): Promise<Note> {
        console.log('add service', note);
        let len = this.notes.push(note);
        let index = len - 1;
        return new Promise((req, res) => {
            return note;
        });
    }

    async update(id: number, title: string, body: string): Promise<Note> {
        return new Promise((req, res) => {
            let note = this.notes.find((e) => e.id == id);
            let temp = new Note();
            if (note != undefined) {
                temp.title = title;
                temp.body = body;
                temp.id = note.id;
            } else {
                note = new Note();
                note.setter(Date.now(), title, body);
            }
            this.notes = [...this.notes.filter((e) => e.id != note?.id), temp];
            console.log("update service",this.notes);
            return this.notes;
        });
    }

    // delete(id: number) {
    //     this.notes.splice(id, 1);
    // }
}
