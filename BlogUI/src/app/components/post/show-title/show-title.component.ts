import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PageInfo } from 'src/app/entities/pageInfo';
import { Post } from 'src/app/entities/post';
import { Title } from 'src/app/entities/title';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrls: ['./show-title.component.css']
})
export class ShowTitleComponent implements OnInit {
  titles: Title[] | null;
  pageInfo: PageInfo;
  errorMsg: string;

  constructor(private services: PostService, private router: Router) {
    this.titles = null;
    this.pageInfo = {};
    this.errorMsg = "";
   }

  ngOnInit(): void {
    this.getTitles();    
  }

  getTitles(): void {
    this.services.getPostTitles().subscribe(
      data => {
        this.titles = data.body;
        this.pageInfo = JSON.parse(data.headers.get("X-Pagination")!);
      },
      error => this.errorMsg = error.statusText     
    )
  }

  getPost(title: Title): void {
    this.router.navigateByUrl("/posts/" + title.id);
  }

  showAddForm(): void {
    this.router.navigateByUrl("/add");
  }

  showLogForm(): void {
    this.router.navigateByUrl("/admin");
  }

  nextPage(): void {
    let pageNumber = this.pageInfo.currentPage! + 1;
    this.services.getPostTitles(pageNumber).subscribe(
      data => {
        this.titles = data.body;
        this.pageInfo = JSON.parse(data.headers.get("X-Pagination")!);
      }     
    )
  }

  prevPage(): void {
    let pageNumber = this.pageInfo.currentPage! - 1;
    this.services.getPostTitles(pageNumber).subscribe(
      data => {
        this.titles = data.body;
        this.pageInfo = JSON.parse(data.headers.get("X-Pagination")!);
      }
    )
  }

  goToPage(pageNumber: number): void {
    this.services.getPostTitles(pageNumber).subscribe(
      data => {
        this.titles = data.body;
        this.pageInfo = JSON.parse(data.headers.get("X-Pagination")!);
      }     
    )
  }
}
