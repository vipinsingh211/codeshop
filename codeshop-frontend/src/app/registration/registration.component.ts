import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { BackendService } from '../services/backend.service';
import * as validator from '../../../../common-lib/validator';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public email = new FormControl('');
  public password = new FormControl('');
  public confirmPassword = new FormControl('');

  public emailError = "";
  public passwordError = "";
  public confirmPasswordError = "";

  constructor(
    private backend: BackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public registerUser() {
    const email = this.email.value;
    const password = this.password.value;
    const confirmPassword = this.confirmPassword.value;

    this.emailError = "";
    this.passwordError = "";
    this.confirmPasswordError = "";

    if (!validator.is_valid_email(email)) {
      this.emailError = 'Invalid email address.';
    }

    if (!validator.is_valid_pass(password)) {
      this.passwordError = 'Invalid password (Hint: At least one upper-case and one number. Password size from 6 to 100 characters.)';
    }

    if (password !== confirmPassword) {
      this.passwordError = 'Password and Confirm password fields values are not matching.'
      this.confirmPasswordError = 'Password and Confirm password fields values are not matching.';
    }

    if (this.emailError !== "" || this.passwordError !== "" || this.confirmPasswordError !== "") {
      console.log('here')
      return false;
    }


    this.backend.registerUser(email, password)
      .pipe(
        tap((value) => {
          this.router.navigateByUrl('/login');
        }),
        catchError( this.backend.handleError<any[]>('userRegistration', []))
      )
  }

}
