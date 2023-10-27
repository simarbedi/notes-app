import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';
import { AppState } from 'src/app/state/app.state';
import { addNote, updateNote } from 'src/app/state/notes/notes.actions';
import { getById } from 'src/app/state/notes/notes.selector';

@Component({
    selector: 'app-notes-details',
    templateUrl: './notes-details.component.html',
    styleUrls: ['./notes-details.component.sass'],
})
export class NotesDetailsComponent implements OnInit {
    note!: Note;
    noteId!: number;
    new!: boolean;
    constructor(
        private notesService: NotesService,
        private router: Router,
        private route: ActivatedRoute,
        private store: Store<AppState>
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.note = new Note();
            if (params['id']) {
                this.noteId = params['id'];
                // this.store.select(getById(this.noteId)).pipe(
                //     map((data)=>{
                //         console.log(data);
                        
                //         this.note = data[0]
                //     })
                // )
                this.store.select(getById(this.noteId)).subscribe(
                    data=>{
                        console.log(data);
                        this.note = data[0]
                    }
                )
                this.new = false;
            } else {
                this.new = true;
            }
        });
    }

    onSubmit(form: NgForm) {
        console.log(form);
        if (this.new) {
            let n = new Note();
            n.setter(Date.now(), form.value.title, form.value.body);
            this.store.dispatch( addNote({note:n}))
            // this.notesService.add(form.value);
        } else {
            // this.notesService.update(this.noteId, form.value.title, form.value.body);
            let n = new Note();
            n.setter(this.noteId, form.value.title, form.value.body);
            this.store.dispatch(updateNote({note:n}))
        }
        this.router.navigateByUrl('/');
    }

    cancel() {
        this.router.navigateByUrl('/');
    }
}
