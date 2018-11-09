import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router, ActivatedRoute} from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  allStudents: any;
  id: any;
  editStudent:any={
  //   _id: '',
  // dob:'',
  // fatherName:'',
  // gender:'',
  // motherName:'',
  // studentName:'',
  // standard:'',
  };
    constructor( public dataservice: DataService,
                 public router: Router,
                 private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataservice.getAllStudents().subscribe(res => {
       this.allStudents = res;
       console.log(this.allStudents);
       for(let i=0 ; i < this.allStudents.length ; i++){
       if(this.id===this.allStudents[i]._id){
         this.editStudent._id=this.allStudents[i]._id;
         this.editStudent.studentId=this.allStudents[i].studentId
         this.editStudent.studentName=this.allStudents[i].name;
         this.editStudent.dob=this.allStudents[i].dob;
         this.editStudent.fatherName=this.allStudents[i].fathername;
         this.editStudent.motherName=this.allStudents[i].mothername;
         this.editStudent.gender=this.allStudents[i].gender;
         this.editStudent.standard=this.allStudents[i].standard;
       }
       }
    });
  }
  updateStudent () {
    this.dataservice.updateStudent(this.editStudent).subscribe(res => {
      console.log(res);
      this.router.navigate(['/app/allstudents']);
    });
  }

}
