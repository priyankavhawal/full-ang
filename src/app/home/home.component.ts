import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import { observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   emps:any;

  constructor(private service:DataService) { }

  ngOnInit() {
      let observableResult=this.service.Select();
      observableResult.subscribe((result)=>{
        console.log(result);
        this.emps=result;
      });



    // this.emps=[
    //     {"No":1,"Name":"ABC","Age":20},
    //     {"No":2,"Name":"ABC","Age":20},
    //     {"No":3,"Name":"ABC","Age":20},
    // ]
  }
  

}
