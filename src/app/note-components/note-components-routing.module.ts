import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleNoteComponent } from './components/single-note/single-note.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { AddNoteComponent } from './components/add-note/add-note.component';

const routes: Routes = [
  { path: ':id', component: SingleNoteComponent },
  { path: '', component: NotesListComponent },
  { path: 'addnote', component: AddNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteComponentsRoutingModule { }