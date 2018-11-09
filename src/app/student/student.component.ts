import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  newstudent:any;

  constructor(public dataservice:DataService,
    public router:Router) { }

  ngOnInit() {
  }
  newStudent(value){
       
    console.log(value);

      // http call ends
  this.dataservice.createStudent(value).subscribe(res=>{
    this.newstudent=res;
         // http call ends
    this.router.navigate(['/app/liststudent'])
  })
  }
}
