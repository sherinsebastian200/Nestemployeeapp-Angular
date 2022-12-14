import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-employ',
  templateUrl: './view-employ.component.html',
  styleUrls: ['./view-employ.component.css']
})
export class ViewEmployComponent {
  empcode:any=""
  data:any=[]
  constructor(private api:ApiService){
    this.empcode=localStorage.getItem("userInfo")
    let data:any={
      "empcode":this.empcode
    }
    this.api.employView(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        this.data=response
      }
    )
  }
  }