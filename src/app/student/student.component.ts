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
    let data={
      studentId: "SCL" +value.standard+ Math.random().toString(20).slice(2),
      studentName:value.studentName,
      dob:value.dob,
      fatherName:value.fatherName,
      motherName:value.motherName,
      gender:value.gender,
      standard:value.standard
    }

      // http call ends
  this.dataservice.createStudent(data).subscribe(res=>{
    this.newstudent=res;
    alert("Add sucessfully")
         // http call ends
    this.router.navigate(['/app/liststudent'])
  })
  }
}
