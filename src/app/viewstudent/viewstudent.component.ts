import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  allStudents: any;
  _id: any;
  editStudent:any={
    id: '',
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
    this._id = this.route.snapshot.params['id'];
    this.dataservice.getAllStudents().subscribe(res => {
       this.allStudents = res;
       console.log(this.allStudents);
       for(let i=0 ; i < this.allStudents.length ; i++){
       if(this._id===this.allStudents[i].id){
         this.editStudent.id=this.allStudents[i].id;
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
       }console.log("test"+this.editStudent.name)
    });
  }

}
