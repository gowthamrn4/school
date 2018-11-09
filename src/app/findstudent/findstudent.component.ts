import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data'

@Component({
  selector: 'app-findstudent',
  templateUrl: './findstudent.component.html',
  styleUrls: ['./findstudent.component.css']
})
export class FindstudentComponent implements OnInit {

  student={}
  constructor(public dataService:DataService) { }


  ngOnInit() {
  }

  findStudent(){
    this.dataService.findStudent(this.student).subscribe(res=>{
      this.student=res.length>0 ? res[0].state.data :{}

    })
  }


}
