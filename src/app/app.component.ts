import { Component , OnInit } from '@angular/core';
import { SchoolService } from './school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'Batch8_AngularRouting';

  isMainPage = false;

  constructor(private schoolService : SchoolService , private router : Router){
      
  }

  ngOnInit(): void {
     this.schoolService.eventemitter.subscribe((value)=>{
          if(value == "Authorized"){
             this.isMainPage = true;
             this.router.navigate(['main']);
          }
     })
  }



  // eventemitter we have to use 

  // again you have to rememeber component life cycle....

  // 
  // event emitter having the "authorized" value
  // i am going to chek the value from event emitter
  // so for that  i want to take subscription of eventemitter
  // i need to subscribe the 

   //this.eventemitter



}
