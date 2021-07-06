import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/entities/post';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post = {};
  errMsg: string = "";

  constructor(private repository: RepositoryService,
              private errorHandler: ErrorHandlerService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    let id: number = this.route.snapshot.params["id"];
    this.repository.get(`api/posts/${id}`).subscribe(
      data => this.post = data,
      err => {
        this.errorHandler.handleError(err);
        this.errMsg = this.errorHandler.errMsg;
      }
    )
  }
}
