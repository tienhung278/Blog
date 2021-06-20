import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthResponse } from 'src/app/entities/auth-response';
import { User } from 'src/app/entities/user';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  errorMsg: string;
  user: User;

  get email(): AbstractControl{
    return this.form.get('email')!;
  }

  get password(): AbstractControl{
    return this.form.get('password')!;
  }

  constructor(private formBuilder: FormBuilder, 
    private auth: AuthService,
    private authGuard: AuthGuardService,
    private route: ActivatedRoute,
    private router: Router) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.errorMsg = "";
    this.user = {};
   }

  ngOnInit(): void {    
  }

  login(): void {
    this.user = this.form.value;
    this.auth.login(this.user).subscribe(
      data => {
        this.authGuard.authResponse = data.body!;
        this.router.navigateByUrl("/admin");
      },
      error => this.errorMsg = error.statusText
    )
  }

}
