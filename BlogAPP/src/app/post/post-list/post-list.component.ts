import { Component, OnInit } from '@angular/core';
import { Title } from 'src/app/entities/title';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  titles: Title[] = [];
  errMsg: string = "";

  constructor(private repository: RepositoryService,
              private errorHandler: ErrorHandlerService) { }

  ngOnInit(): void {
    this.getTitles();
  }

  getTitles(): void {
    this.repository.get("api/posts/titles").subscribe(
      data => this.titles = data,
      err => {
        this.errorHandler.handleError(err);
        this.errMsg = this.errorHandler.errMsg;
      }
    )
  }

}
