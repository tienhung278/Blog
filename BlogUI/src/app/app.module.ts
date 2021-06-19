import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { ShowDeleteComponent } from './components/post/show-delete/show-delete.component';
import { AddEditComponent } from './components/post/add-edit/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ShowDeleteComponent,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
