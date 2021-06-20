import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/entities/post';
import { PostService } from 'src/app/services/post.service';
import { PostComponent } from '../post.component';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  post: Post;
  titleId: number;
  searchText: string;
  errorMsg: string;

  constructor(private route: ActivatedRoute,
     private services: PostService,
     private router: Router) {
       this.post = {};
       this.titleId = 0;
       this.searchText = "";
       this.errorMsg = "";
  }

  ngOnInit(): void {
    this.titleId = Number(this.route.snapshot.paramMap.get('id'));
    this.getPost(this.titleId);
  }

  getPost(id: number): void {
    this.services.getPost(id).subscribe(
      data => this.post = data.body!,
      error => this.errorMsg = error.statusText
   )
  }

  getList(): void {
    this.router.navigateByUrl("/");
  }

  showEditForm(): void {
    this.router.navigateByUrl("/edit/" + this.post.id);
  }  

  deletePost(): void {
    this.services.deletePost(this.titleId).subscribe(() => {
      this.getList();
    });
  }
}
