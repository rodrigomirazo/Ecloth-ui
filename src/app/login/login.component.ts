import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first, map } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
          this.router.navigate(['/']);
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

                let cookie = JSON.parse(localStorage.getItem('user'));
                cookie = JSON.parse(localStorage.getItem('user'));
                
                let userName = cookie.email;
                let password = cookie.uid;

                console.log("before cross login " + { userName, password });
                
                this.loading = true;
                this.authenticationService.login(userName, password)
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

                /*
                this.http.post<any>(this.authService.crossLogin, { userName, password })
                .pipe(map(user => {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    
                    console.log("inside cross login");
                    let encripted: string = JSON.stringify(user);
                    
                    localStorage.setItem(this.authService.currentUserCookie, encripted);
                    this.authService.currentUserSubject.next(user);

                    user;
                }));
                */
            }
        }
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

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
  }
}
