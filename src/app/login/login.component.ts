import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SESSION_GOOGLE_USER, SESSION_PREFIX } from '../_helpers/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  public googleUserCookie: string = SESSION_PREFIX + SESSION_GOOGLE_USER;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      public authService: AuthenticationService,
      private http: HttpClient,
  ) { 
      console.log("const login");
      // redirect to home if already logged in
      
      if (this.authenticationService.currentUserValue) {
          if(this.authService.tokenIsValid()) {
            this.router.navigate(['/']);
          } else {
            this.authService.logout();
          }
      }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log("this.returnUrl: ", this.returnUrl);

    this.route.queryParams.subscribe(params => {
        console.log(params);
        if(params) {
            if(params.crossLogin) {
                //let user: User = new User(userName, password);

                if(
                  localStorage.getItem(this.googleUserCookie) == null ||
                  localStorage.getItem(this.googleUserCookie) == "null"
                  ) {
                    console.log("if(params.crossLogin) {");
                    window.location.reload();
                }

                let cookie = JSON.parse(localStorage.getItem(this.googleUserCookie));
                cookie = JSON.parse(localStorage.getItem(this.googleUserCookie));
                
                let userName = cookie.email;
                let password = cookie.uid;

                console.log("before cross login " + { userName, password });

                this.loading = true;
                this.authenticationService.googleLogin(userName, password)
                    .pipe(first())
                    .subscribe(
                        data => {
                          console.log("this.returnUrl: ", this.returnUrl);
                          window.location.replace(environment.indexPage + "?refresh=true");
                          
                        },
                        error => {
                            this.error = error;
                            this.loading = false;
                        });
            }
        }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {

      console.log("onSubmit() fro login");
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      this.authenticationService.SignIn(this.f.username.value, this.f.password.value);
/*
      this.loading = true;
      this.authenticationService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                console.log("this.returnUrl: ", this.returnUrl);
                window.location.replace(environment.indexPage + "?refresh=true");
                
              },
              error => {
                  this.error = error;
                  this.loading = false;
              });
              */
  }

}
