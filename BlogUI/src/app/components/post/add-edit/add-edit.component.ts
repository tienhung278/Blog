import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/entities/post';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  post: Post = {};

  constructor(private router: Router, private services: PostService) { }

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
