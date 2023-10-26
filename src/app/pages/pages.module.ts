import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NotesListComponent } from './notes-list/notes-list.component';
import { PagesComponent } from './pages.component';
import { NoteCardComponent } from './note-card/note-card.component';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NotesListComponent,
    PagesComponent,
    NoteCardComponent,
    NotesDetailsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule
  ]
})
export class PagesModule { }
