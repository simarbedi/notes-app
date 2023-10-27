import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { notesReducer } from './state/notes/notes.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NotesEffects } from './state/notes/notes.effects';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        StoreModule.forRoot({ notes: notesReducer }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        EffectsModule.forRoot([NotesEffects]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
