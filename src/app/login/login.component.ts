import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {DataService} from '../service/data';
import {AuthService} from '../service/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};
  newLogin:any
  constructor( private router : Router,
               private dataservice:DataService,
               public authService: AuthService,
              ) { }
  ngOnInit() {}
  onLogin(): void {
  if (this.validateForm(this.email, this.password)) {
    this.authService.loginWithEmail(this.email, this.password)
      .then(() => this.router.navigate(['/app']))
      .catch(_error => {
        this.error = _error
        alert(_error)
        this.router.navigate(['/login'])
      })
  }
}
validateForm(email: string, password: string): boolean {
  if (email.length === 0) {
    this.errorMessage = 'Please enter Email!'
    return false
  }

  if (password.length === 0) {
    this.errorMessage = 'Please enter Password!'
    return false
  }

  if (password.length < 6) {
    this.errorMessage = 'Password should be at least 6 characters!'
    return false
  }

  this.errorMessage = ''

  return true
}

} 