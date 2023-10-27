import { createReducer, on } from '@ngrx/store';
import { Note } from 'src/app/shared/note.model';
import { addNote, removeNote, loadNotes, loadNotesSuccess, loadNotesFailure, updateNote } from './notes.actions';

export interface NotesState {
    notes: Note[];
    error: string|null;
    status: 'pending' | 'loading' | 'error' | 'success';
}

export const initialState: NotesState = {
    notes: [],
    error: null,
    status: 'pending',
};


export const notesReducer = createReducer(
    // Supply the initial state
    initialState,
    // Add the new note to the notes array
    on(addNote, (state, { note }) => ({
        ...state,
        notes: [...state.notes, note],
    })),
    // update the note to the notes array
    on(updateNote, (state, { note }) => ({
        ...state,
        notes: [...state.notes.filter((n) => n.id != note.id),note],
    })),
    // Remove the note from the notes array
    on(removeNote, (state, { id }) => ({
        ...state,
        notes: state.notes.filter((note) => note.id !== id),
    })),
    // Trigger loading the notes
    on(loadNotes, (state) => ({ ...state, status: 'loading' })),
    // Handle successfully loaded notes
    on(loadNotesSuccess, (state, { notes }) => ({
        ...state,
        notes: notes,
        error: null,
        status: 'success',
    })),
    // Handle notes load failure
    on(loadNotesFailure, (state, { error }) => ({
        ...state,
        error: error,
        status: 'error',
    })),
);
