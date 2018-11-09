import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-liststudent',
  templateUrl: './liststudent.component.html',
  styleUrls: ['./liststudent.component.css']
})
export class ListstudentComponent implements OnInit {
  allStudents:any
  deleteFromSchool:any;
  twelthStudents:any=[]
  eleventhStudents:any=[]
  tenthStudents:any=[]
  ninethStudents:any=[]
  eighthStudents:any=[]
  seventhStudents:any=[]
  sixthStudents:any=[]
  fifthStudents:any=[]
  fourthStudents:any=[]
  thirdStudents:any=[]
  secondStudents:any=[]
  firstStudents:any=[];
  student:any
  constructor( public dataservice:DataService,
               public router:Router  ) { }

  ngOnInit() {
      this.getAllStudents();
    
  }
  getAllStudents(){
    this.dataservice.getAllStudents().subscribe(res=>{
      for(var j=0;j<res.length;j++){
        this.allStudents.push(res[j].state.data)
      }
          for(let i=0;i<this.allStudents.length;i++){
              if(this.allStudents[i].standard==="12"){
                this.twelthStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="11"){
                this.eleventhStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="10"){
                this.tenthStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="9"){
                this.ninethStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="8"){
                this.eighthStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="7"){
                this.seventhStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="6"){
                this.sixthStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="5"){
                this.fifthStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="4"){
                this.fourthStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="3"){
                this.thirdStudents.push(this.allStudents[i])
              }else if(this.allStudents[i].standard==="2"){
                this.secondStudents.push(this.allStudents[i])
              }
              else{
                this.firstStudents.push(this.allStudents[i])
              }
          }
        })
  }
     
 


}
