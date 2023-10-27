import { createAction, props } from '@ngrx/store';
import { Note } from 'src/app/shared/note.model';

export const addNote = createAction('[Note Page] Add Note', props<{ note:Note }>());

export const updateNote = createAction('[Note Page] Add Note', props<{ note: Note }>());

export const removeNote = createAction('[Note Page] Remove Note', props<{ id: number }>());

export const loadNotes = createAction('[Note Page] Load Notes');

export const loadNotesSuccess = createAction('[Note API] Note Load Success', props<{ notes: Note[] }>());

export const loadNotesFailure = createAction('[Note API] Note Load Failure', props<{ error: string }>());
