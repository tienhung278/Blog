import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  { path: 'list', component: PostListComponent },
  { path: 'details/:id', component: PostDetailsComponent },
  { path: '', redirectTo: "list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
