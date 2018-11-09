import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listoutgoingtransfer',
  templateUrl: './listoutgoingtransfer.component.html',
  styleUrls: ['./listoutgoingtransfer.component.css']
})
export class ListoutgoingtransferComponent implements OnInit {
  allStudents:any;
  constructor(public dataservice:DataService,
    public router:Router) { }

  ngOnInit() {
    this.getAllStudents()
  }
  getAllStudents(){
    this.dataservice.getAllTransfer().subscribe(res=>{
      this.allStudents=res;
      console.log(this.allStudents)
      
    })
  }
}
