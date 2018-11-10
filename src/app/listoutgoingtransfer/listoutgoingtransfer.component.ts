import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listoutgoingtransfer',
  templateUrl: './listoutgoingtransfer.component.html',
  styleUrls: ['./listoutgoingtransfer.component.css']
})
export class ListoutgoingtransferComponent implements OnInit {
  allTransferLists:any
  outgoingTransferList:any=[]

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  getOutgoingList(){
    this.dataService.getTransfersList().subscribe(res=>{
      for(var j=0;j<res.length;j++){
        this.allTransferLists.push(res[j].state.data)
      }
      for(var i=0;i<this.allTransferLists.length;i++){
        if(this.allTransferLists[i].originSchool==="O=SchoolB, L=Mumbai, C=IN"){
         this.outgoingTransferList.push(this.allTransferLists[i])
        }
      }

    })
  }
}
