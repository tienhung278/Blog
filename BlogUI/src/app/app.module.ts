import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { ShowTitleComponent } from './components/post/show-title/show-title.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { HighlightsearchPipe } from './pipes/highlightsearch.pipe';
import { AddEditComponent } from './components/post/add-edit/add-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ShowTitleComponent,
    ShowPostComponent,
    HighlightsearchPipe,
    AddEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
