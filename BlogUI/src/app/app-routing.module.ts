import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/auth/admin/admin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AddEditComponent } from './components/post/add-edit/add-edit.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { ShowTitleComponent } from './components/post/show-title/show-title.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'posts', component: ShowTitleComponent },
  { path: 'posts/:id', component: ShowPostComponent},
  { path: 'add', component: AddEditComponent },
  { path: 'edit/:id', component: AddEditComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
  { path: '', redirectTo: '/posts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
