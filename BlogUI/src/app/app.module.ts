import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { AddEditComponent } from './components/post/add-edit/add-edit.component';
import { ShowTitleComponent } from './components/post/show-title/show-title.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    AddEditComponent,
    ShowTitleComponent,
    ShowPostComponent
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
