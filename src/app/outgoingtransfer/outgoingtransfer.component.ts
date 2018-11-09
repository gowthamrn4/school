import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router} from '@angular/router';
@Component({
  selector: 'app-outgoingtransfer',
  templateUrl: './outgoingtransfer.component.html',
  styleUrls: ['./outgoingtransfer.component.css']
})
export class OutgoingtransferComponent implements OnInit {


  

    std:any;
    name:any;
    toStd:any[]=[];
    transferstudent:any
    allStudents:any;
    deleteStudents:any;
    selectedStandard:any[]=[];
    selected_Id:any[]=[];
    remainingStudents:any=[];
    CreatedTransfer:any;
    name1:any;
    deleteFromSchool:any;
    constructor(
                 public dataservice:DataService,
                 public router:Router ,
                
    ) {}
  
    ngOnInit() {
     this.getAllStudents()
  
    }
    seletedStudent(value){
            let data={
              id:value.id
            }
            console.log("test"+data);
    }
  transferStudent(value){
    
          
    console.log("my"+value);
    this.dataservice.transferStudent1(value).subscribe(res=>{
    this.transferstudent=res;
    })
  
  }


  
  getAllStudents(){
    this.dataservice.getAllStudents().subscribe(res=>{
      this.allStudents=res;
  
      console.log(this.allStudents)
    })
  }

  
  selectStandard(value){
    this.std=value.standard
    this.selectedStandard=[];
    for(let i=0 ; i<this.allStudents.length ; i++){
        if(this.allStudents[i].standard===this.std){
         
          this.selectedStandard.push(this.allStudents[i]);
        }else this.remainingStudents.push(this.allStudents[i]);
    }
    this.toStd=[];
    for (let k=0;k<this.std.length;k++){
      this.toStd.push(this.std);
      this.toStd.push(JSON.stringify(parseInt(this.std)+1));
    }
    console.log("all data"+this.selectedStandard)
    
  }
  


}
