import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/entities/post';
import { Title } from 'src/app/entities/title';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-show-title',
  templateUrl: './show-title.component.html',
  styleUrls: ['./show-title.component.css']
})
export class ShowTitleComponent implements OnInit {
  titles: Title[] = [];

  constructor(private services: PostService, private router: Router) { }

  ngOnInit(): void {
    this.getTitles();
  }

  getTitles(): void {
    this.services.getPostTitles().subscribe(data => {
       this.titles = data;
    })
  }

  getPost(title: Title): void {
    this.router.navigateByUrl("/posts/" + title.id);
  }

  showAddForm(): void {
    this.router.navigateByUrl("/add");
  }
}
