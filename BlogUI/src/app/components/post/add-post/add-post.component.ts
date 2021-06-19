import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  titleId: number = 0;
  post: Post = {};

  constructor(private router: Router, 
    private services: PostService) { 

    }

  ngOnInit(): void {
    
  }

  getList(): void {
    this.router.navigateByUrl("/");
  }

  save(titleForm: NgForm): void {
    this.post = titleForm.value;
    this.services.addPost(this.post).subscribe(() => {
      this.getList();
    });    
  }
}
