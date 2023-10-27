import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { AppState } from 'src/app/state/app.state';
import { loadNotes, removeNote } from 'src/app/state/notes/notes.actions';
import { selectAllNotes } from 'src/app/state/notes/notes.selector';

@Component({
    selector: 'app-notes-list',
    templateUrl: './notes-list.component.html',
    styleUrls: ['./notes-list.component.sass'],
})
export class NotesListComponent implements OnInit {
    public notes$ = this.store.select(selectAllNotes);
    constructor(
        private notesService: NotesService,
        private store: Store<AppState>,
    ) {}

    ngOnInit(): void {
         this.store.dispatch(loadNotes());
    }

    deleteNote(id: number) {
        this.store.dispatch(removeNote({id:id}))
    }
}
