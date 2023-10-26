import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesDetailsComponent } from './notes-details/notes-details.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: NotesListComponent },
            { path: 'new', component: NotesDetailsComponent },
            { path: ':id', component: NotesDetailsComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
