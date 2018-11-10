import { Component, OnInit } from '@angular/core'; 
import {DataService} from '../service/data'

@Component({
  selector: 'app-incommingtransfer',
  templateUrl: './incommingtransfer.component.html',
  styleUrls: ['./incommingtransfer.component.css']
})
export class IncommingtransferComponent implements OnInit {

  allTransferLists:any
  incommingTransferList:any=[]

  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

  getIncommingList(){
    this.dataService.getTransfersList().subscribe(res=>{
      for(var j=0;j<res.length;j++){
        this.allTransferLists.push(res[j].state.data)
      }
      for(var i=0;i<this.allTransferLists.length;i++){
        if(this.allTransferLists[i].destSchool==="O=SchoolB, L=Mumbai, C=IN"){
         this.incommingTransferList.push(this.allTransferLists[i])
        }
      }

    })
  }

}
