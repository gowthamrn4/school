import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import {DataService} from '../service/data';
import {AuthService} from '../service/auth';
import { Router } from '@angular/router';
import {User} from '../service/user';
import {AngularFireAuth} from 'angularfire2/auth';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  user={} as User
  userId={
    uid:''
  }
  email = '';
  password = '';
  errorMessage = '';
  error: {name: string, message: string} = {name: '', message: ''};
  constructor(private dataservice:DataService,
              public authService: AuthService,
              private router : Router,
              private afauth:AngularFireAuth){}

            
  // onSubmit = function (user) {
  //   console.log(user);
  // }
  onSignup(user){
    this.afauth.auth.createUserWithEmailAndPassword(user.email,user.password)
    .then(data=>{
      this.userId.uid=this.afauth.auth.currentUser.uid;
      console.log(this.userId.uid)
      alert('Registered !')
     
    })
    .catch(_error=>{
      this.error = _error;
      this.router.navigate(['/signup'])
    });
    console.log(user.email,user.password,this.userId.uid)
  }
}
        
