import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username=""
  password=""
constructor(private router:Router){}
  readValues=()=>
  {
    let data:any={"username":this.username,"password":this.password}
    console.log(data)
    if (this.username=="admin" && this.password=="12345") {
      this.router.navigate(['/addemploy'])
    } else {
      alert("invalid credentials")
    }
  }
}