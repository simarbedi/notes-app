import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { NotesState } from './notes.reducer';

export const selectNotes = (state: AppState) => state.notes;
export const selectAllNotes = createSelector(selectNotes, (state: NotesState) =>{ 
    console.log(state);
    
    return state.notes
});
export const getById = (id: number) => createSelector(selectNotes, (state: NotesState) => {
    console.log(state.notes.filter((e) =>{
        console.log(e.id,id);
        return e.id === id
    }));
    return state.notes.filter(e=>e.id==id)
});