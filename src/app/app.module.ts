import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostsListService } from './services/posts-list.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    PostsListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
