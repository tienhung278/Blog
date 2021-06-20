import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
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
    private route: ActivatedRoute, 
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
    this.titleId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.titleId > 0) {
      this.getPost(this.titleId);
    }
  }

  getList(): void {
    this.router.navigateByUrl("/");
  }

  save(): void {
    this.post = this.form.value;
    if (this.titleId === 0) {
      this.services.addPost(this.post).subscribe(() => {
        this.getList();
      });
    } else {
      this.services.updatePost(this.post, this.titleId).subscribe(() => {
        this.getList();
      });
    }   
  }

  getPost(id: number): void {
    this.services.getPost(id).subscribe(data => {
      this.form.setValue({
        title: data.title,
        content: data.content
      })
   });
  }
}