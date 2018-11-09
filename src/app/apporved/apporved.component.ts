import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-apporved',
  templateUrl: './apporved.component.html',
  styleUrls: ['./apporved.component.css']
})
export class ApporvedComponent implements OnInit {
  allStudents:any;
  constructor(public dataservice:DataService,
    public router:Router) { }
  ngOnInit() {
    this.getAllStudents()
  }
  getAllStudents(){
    this.dataservice.getapporved().subscribe(res=>{
      this.allStudents=res;
      console.log(this.allStudents)
      
    })
  }
  

}
