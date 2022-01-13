import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      usermail: ['', Validators.required],
      password: ['', Validators.required],
  });

  }

  /*
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.authenticationService.SendVerificationMail(this.f.username.value, this.f.password.value)
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
*/
}
