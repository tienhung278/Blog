import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandlerService } from 'src/app/shared/services/error-handler.service';
import { RepositoryService } from 'src/app/shared/services/repository.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  postForm: FormGroup;
  validationMessages: any = {
    title: {
      required: "Title is required"
    },
    content: {
      required: "Content is required"
    },
    createdAt: {
      required: "Create At is required"
    }
  };
  formErrors: any = {
    title: "",
    content: "",
    createdAt: ""
  };
  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, 
              private router: Router,
              private repository: RepositoryService,
              private errorHandler: ErrorHandlerService) {
    this.postForm = this.formBuilder.group({
      title: ["", Validators.required],
      content: ["", Validators.required],
      createdAt: ["", Validators.required]
    })
   }

  ngOnInit(): void {
    this.postForm.valueChanges.subscribe(
      data => this.checkValidation()
    )
  }

  redirect() {
    this.router.navigate(["/post/list"]);
  }

  setDate(value: string) {
    if (value.length === 10) {
      this.postForm.patchValue({ "createdAt": value });
    } else {
      this.postForm.patchValue({ "createdAt": "" });
    }
  }

  save(): void {
    if (this.postForm.valid) {
      this.repository.create("api/post", this.postForm.value).subscribe(
        data => $("#successModal").show(),
        err => {
          this.errorHandler.handleError(err);
          this.errorMessage = this.errorHandler.errMsg;
        }
      )
    }    
  }

  private checkValidation() {
    Object.keys(this.postForm.controls).forEach((key: string) => {
      let formControl: AbstractControl = this.postForm.get(key) as AbstractControl;
      this.formErrors[key] = "";      
      if (formControl.invalid && formControl.dirty) {
        let messages = this.validationMessages[key];
        for (let errorKey in formControl.errors) {
          this.formErrors[key] += messages[errorKey] + " ";
        }
      }
    });
  }

}
