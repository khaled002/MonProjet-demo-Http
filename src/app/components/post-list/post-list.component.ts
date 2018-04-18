import { Component, OnInit } from '@angular/core';
import { IPost } from '../../domain/ipost';
import { PostsListService } from '../../services/posts-list.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  data: IPost[];
  constructor(private service: PostsListService) { }

  ngOnInit() {
     this.service.getAllPosts().subscribe(
      posts => this.data = posts
    );

  }

}
