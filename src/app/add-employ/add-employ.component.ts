import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employ',
  templateUrl: './add-employ.component.html',
  styleUrls: ['./add-employ.component.css']
})
export class AddEmployComponent {
  empcode=""
  empname=""
  designation=""
  salary=""
  company=""
  mobno=""
  address=""
  username=""
  password=""
  confirm=""
  constructor(private api:ApiService){}
  readvalue=()=>
  {
    let data:any={"empcode":this.empcode,"empname":this.empname,"designation":this.designation,"salary":this.salary,"company":this.company,
    "mobno":this.mobno,"address":this.address,"username":this.username,"password":this.password,"confirm":this.confirm}
    console.log(data)
    this.api.addEmploy(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.status=="success")
        {
          alert("employ added successfully")
          this.company=""
          this.designation=""
          this.empcode=""
          this.empname=""
          this.mobno=""
          this.address
          this.password=""
          this.salary=""
          this.username=""
          this.confirm=""
        }
        else{
          alert("something went wrong")
        }
      }
    )
  }
  }
