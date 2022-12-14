import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-employ-login',
  templateUrl: './employ-login.component.html',
  styleUrls: ['./employ-login.component.css']
})
export class EmployLoginComponent {
  username=""
  password=""
  searchEmp:any=[]
  constructor(private api:ApiService,private router:Router){}
  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    this.api.employLogin(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.length==0) {
          alert("invalid ")
        } else {
          this.searchEmp=response;
          let userId=response.userId
          console.log(userId)
          localStorage.setItem("userInfo",userId)
          this.router.navigate(['/viewtask'])
        }
      }
    )
  
  }
  
  }