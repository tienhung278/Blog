import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { ShowTitleComponent } from './components/post/show-title/show-title.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { AddPostComponent } from './components/post/add-post/add-post.component';
import { EditPostComponent } from './components/post/edit-post/edit-post.component';
import { HighlightsearchPipe } from './pipes/highlightsearch.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ShowTitleComponent,
    ShowPostComponent,
    AddPostComponent,
    EditPostComponent,
    HighlightsearchPipe
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
