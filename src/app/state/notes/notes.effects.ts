import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { NotesService } from 'src/app/shared/notes.service';
import { addNote, loadNotes, loadNotesFailure, loadNotesSuccess, removeNote } from './notes.actions';
import { selectAllNotes} from './notes.selector';

@Injectable()
export class NotesEffects {
    constructor(
        private actions$: Actions,
        private store: Store<AppState>,
        private notesService: NotesService,
    ) {}

    // Run this code when a loadNotes action is dispatched
    loadNotes$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadNotes),
            switchMap(() =>
                // Call the getNodes method, convert it to an observable
                from(this.notesService.getAll()).pipe(
                    // Take the returned value and return a new success action containing the notes
                    map((notes) => loadNotesSuccess({ notes: notes })),
                    // Or... if it errors return a new failure action containing the error
                    catchError((error) => of(loadNotesFailure({ error }))),
                ),
            ),
        ),
    );

    // Run this code when the addNote action is dispatched
    saveTodos$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(addNote),
                // withLatestFrom(this.store.select(selectAllNotes)),
                switchMap((action) => 
                    from(this.notesService.add(action.note)).pipe(
                        map((note)=>{
                            console.log(note+'added successfully');
                        }),
                    )),
            ),
        // Most effects dispatch another action, but this one is just a "fire and forget" effect
        { dispatch: false },
    );
}
