import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  @ViewChild('username') username:ElementRef;
  @ViewChild('password') password:ElementRef;

  constructor(private router:Router , private schoolService : SchoolService){

  }


  evtLogin(){


    var obj  = { Name : 'john'};
    //obj.Name 
    console.log(this.username.nativeElement.value);
    console.log(this.password.nativeElement.value);

    localStorage.setItem("username",this.username.nativeElement.value);
    localStorage.setItem("password",this.password.nativeElement.value);


    this.schoolService.eventemitter.next("Authorized");
    //

  }


  evtClear(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }


  
}
