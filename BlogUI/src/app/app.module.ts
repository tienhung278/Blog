import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PostService } from './services/post.service';
import { PostComponent } from './components/post/post.component';
import { ShowTitleComponent } from './components/post/show-title/show-title.component';
import { ShowPostComponent } from './components/post/show-post/show-post.component';
import { HighlightsearchPipe } from './pipes/highlightsearch.pipe';
import { AddEditComponent } from './components/post/add-edit/add-edit.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AdminComponent } from './components/auth/admin/admin.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EventlogService } from './services/eventlog.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    ShowTitleComponent,
    ShowPostComponent,
    HighlightsearchPipe,
    AddEditComponent,
    AuthComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    AuthGuardService, 
    EventlogService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
