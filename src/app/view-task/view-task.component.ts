import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent {
  constructor(private api:ApiService){
    api.viewAllTask().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  data:any=[]
  }