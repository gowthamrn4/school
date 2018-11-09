import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { whenRendered } from '@angular/core/src/render3';
import { checkAndUpdateQuery } from '@angular/core/src/view/query';
import { Headers } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
//  import { database } from 'firebase';
// import { AngularFireDatabase } from 'angularfire2/database';
// import 'rxjs/add/operator/map'
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  allStudents:any;
  newteacher:any;
  allteachers:any;
  updatedStudent:any;
  updateTeacher:any;
  getStudents1:any;
  transferStudentDel:any;
  deleteFromschool:any;
  cstudent:any;
  Tstudent:any;
  Tstudent1:any;
  Tstudent2:any;
  Tstudent3:any
  
  
  constructor( private http:Http,private router:Router) { }
  ngOnInit()
  {
    
  }


  getAllStudents(){
    return this.http.get('http://5bdbe65b433b4f0013e6e024.mockapi.io/student')
    .pipe(map(data=>this.allStudents=data.json()))
  }
  transferStudent1(value){
    return this.http.post('http://5bdbe65b433b4f0013e6e024.mockapi.io/outgoing',value)
    .pipe(map(data=>this.Tstudent=data.json()))
   
  }
  getAllTransfer(){
    return this.http.get('http://5bdbe65b433b4f0013e6e024.mockapi.io/outgoing')
    .pipe(map(data=>this.Tstudent1=data.json()))
  }
  apporved(value){
    return this.http.post('http://5bdbe65b433b4f0013e6e024.mockapi.io/approved',value)
    .pipe(map(data=>this.Tstudent2=data.json()))
  }
  getapporved(){
    return this.http.get('http://5bdbe65b433b4f0013e6e024.mockapi.io/approved')
    .pipe(map(data=>this.Tstudent3=data.json()))
  }
  // newUser(value){
  // return  this.http.post('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/fslogin',value)
  //   .pipe(map(data =>{
  //     if(data){
  //       alert("Please Login");
  //     }
  //     console.log(data)
  //   }))
  // }
  // newUsers(value)
  // { 
  //   var list;
  //   this.http.get('https://5b7e6d68adf2070014bfa35c.mockapi.io/api/v1/fslogin',value)
  //   .pipe(map(data1 =>{
  //     if(data1==value)
  //     {
  //       this.router.navigate(['/landpage/home']); 

  //     }
  //     else{
  //       alert("bye");
  //     }
  //   }))
  // }
  /* POST NEW NEWS */
  createStudent(value){
    return this.http.post('http://5bdbe65b433b4f0013e6e024.mockapi.io/student',value)
    .pipe(map(data=>this.cstudent=data.json()))
   
  }
  /*END POST NEW NEWS */


  /*POST USER DETAILS */

  /* END GET NEW COMPLAINT */

  /*GET NEW MAINTENANCE */

  /* END GET NEW MAINTENACE */

  /* GET NEW REQUEST */

  /* END NEW REQUEST */


  /* GET OLD COMPLAINT */

  /* END OLD COMPLAINT */


  /* GET OLD Request  */

  /* END OLD Request */

  /* GET OLD Maintenance Request */

/* End GET OLD Maintenance Request */


 /* Find User  */

/* End Find User */

/*
 Notification For Complaint 
*/

 /*
 End Notification For Complaint
  */



// https://flatsafety.herokuapp.com/notification/createNotify//
}

