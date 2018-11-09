import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentComponent implements OnInit {

  allStudents: any;
  id: any;
  editStudent:any={
    _id: '',
  aadharnumber:'',
  bloodgroup:'',
  dob:'',
  doj:'',
  fathername:'',
  fatheroccupation:'',
  gender:'',
  mobilenumber:'',
  mothername:'',
  name:'',
  standard:'',
  motheroccupation:''
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
         this.editStudent.name=this.allStudents[i].name;
         this.editStudent.dob=this.allStudents[i].dob;
         this.editStudent.aadharnumber=this.allStudents[i].aadharnumber;
         this.editStudent.fathername=this.allStudents[i].fathername;
         this.editStudent.mothername=this.allStudents[i].mothername;
         this.editStudent.gender=this.allStudents[i].gender;
         this.editStudent.doj=this.allStudents[i].doj;
         this.editStudent.bloodgroup=this.allStudents[i].bloodgroup;
         this.editStudent.mobilenumber=this.allStudents[i].mobilenumber;
         this.editStudent.standard=this.allStudents[i].standard;
         this.editStudent.fatheroccupation=this.allStudents[i].fatheroccupation;
         this.editStudent.motheroccupation=this.allStudents[i].motheroccupation;
       }
       }
    });
  }
  // updateStudent () {
  //   this.dataservice.updateStudent(this.editStudent).subscribe(res => {
  //     console.log(res);
  //     this.router.navigate(['/app/allstudents']);
  //   });
  // }

}
