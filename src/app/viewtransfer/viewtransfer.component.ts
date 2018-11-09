import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-viewtransfer',
  templateUrl: './viewtransfer.component.html',
  styleUrls: ['./viewtransfer.component.css']
})
export class ViewtransferComponent implements OnInit {
  allStudents: any;
  _id: any;
  editStudent:any={
    id: '',
    name:'',
    school:'',
    std:'',
    reason:'',
    date:'',
    gender:''    
  };
  datatransfer:any;
  constructor( public dataservice: DataService,
    public router: Router,
    private route: ActivatedRoute ) { }

    ngOnInit() {
      this._id = this.route.snapshot.params['id'];
      this.dataservice.getAllTransfer().subscribe(res => {
         this.allStudents = res;
         console.log(this.allStudents);
         for(let i=0 ; i < this.allStudents.length ; i++){
         if(this._id===this.allStudents[i].id){
           this.editStudent.id=this.allStudents[i].id;
           this.editStudent.name=this.allStudents[i].name;
           this.editStudent.school=this.allStudents[i].school;
           this.editStudent.date=this.allStudents[i].date;
           this.editStudent.reason=this.allStudents[i].reason;
           this.editStudent.std=this.allStudents[i].std;
           this.editStudent.gender=this.allStudents[i].gender;
          
           this.editStudent.standard=this.allStudents[i].standard;
      
         }
         }console.log("test"+this.editStudent.name)
      });
    }
  
    datasent(){
      this.dataservice.apporved(this.editStudent).subscribe(res=>{
        this.datatransfer=res;
        alert("successfully")
      })    }
}
