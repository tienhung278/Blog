import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  titleId: number = 0;
  post: Post = {};

  constructor(private router: Router, 
    private services: PostService,
    private route: ActivatedRoute) { 
      
    }

  ngOnInit(): void {
    this.titleId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPost(this.titleId);
  }

  getList(): void {
    this.router.navigateByUrl("/");
  }

  save(titleForm: NgForm): void {
    this.post = titleForm.value;
    this.services.updatePost(this.post, this.titleId).subscribe(() => {
      this.getList();
    });    
  }

  getPost(id: number): void {
    this.services.getPost(id).subscribe(data => {
      this.post = data;
   })
  }

}
