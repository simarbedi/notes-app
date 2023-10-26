import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

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
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.note = new Note();
            if (params['id']) {
                this.note = this.notesService.get(params['id']);
                this.noteId = params['id'];
                this.new = false;
            } else {
                this.new = true;
            }
        });
    }

    onSubmit(form: NgForm) {
        console.log(form);
        if (this.new) {
            this.notesService.add(form.value);
        } else {
            this.notesService.update(this.noteId, form.value.title, form.value.body);
        }
        this.router.navigateByUrl('/');
    }

    cancel() {
        this.router.navigateByUrl('/');
    }
}