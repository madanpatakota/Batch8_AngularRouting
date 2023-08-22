import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  @ViewChild('username') username:ElementRef;
  @ViewChild('password') password:ElementRef;

  constructor(private router:Router){

  }


  evtLogin(){


    var obj  = { Name : 'john'};
    //obj.Name 
    console.log(this.username.nativeElement.value);
    console.log(this.password.nativeElement.value);

    localStorage.setItem("username",this.username.nativeElement.value);
    localStorage.setItem("password",this.password.nativeElement.value);

    this.router.navigate(['main']);

  }


  evtClear(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }


  
}
