import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.postForm = formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      createdAt: ["", Validators.required]
    })
   }

  ngOnInit(): void {

  }

  save(): void {
    Object.keys(this.postForm.controls).forEach((key: string) => {
      let formControl: AbstractControl = this.postForm.get(key) as AbstractControl;
      
    });
  }

}
