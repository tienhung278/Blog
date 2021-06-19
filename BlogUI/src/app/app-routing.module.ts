import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditComponent } from './components/post/add-edit/add-edit.component';
import { PostComponent } from './components/post/post.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { ShowTitleComponent } from './components/post/show-title/show-title.component';

const routes: Routes = [
  { path: 'posts', component: ShowTitleComponent },
  { path: 'posts/:id', component: ShowPostComponent},
  { path: 'add', component: AddEditComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
