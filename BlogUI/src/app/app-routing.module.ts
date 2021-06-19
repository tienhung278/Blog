import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { ShowTitleComponent } from './components/post/show-title/show-title.component';

const routes: Routes = [
  { path: 'posts', component: ShowTitleComponent },
  { path: 'posts/:id', component: ShowPostComponent},
  { path: 'add', component: AddPostComponent },
  { path: 'edit/:id', component: EditPostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
