import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  titleId: number;
  post: Post;
  form: FormGroup;

  get title(){
    return this.form.get('title')!;
  }

  get content(){
    return this.form.get('content')!;
  }

  constructor(private router: Router, 
    private services: PostService,
    private formBuilder: FormBuilder) {
      this.titleId = 0;
      this.post = {}; 
      this.form = this.formBuilder.group({
        title: ['', Validators.required],
        content: ['', Validators.required]
      })
    }
    
  ngOnInit(): void {
    
  }

  getList(): void {
    this.router.navigateByUrl("/");
  }

  save(): void {
    this.post = this.form.value;
    this.services.addPost(this.post).subscribe(() => {
      this.getList();
    });    
  }
}
