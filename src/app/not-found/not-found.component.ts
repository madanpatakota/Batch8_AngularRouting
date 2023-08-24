import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

   constructor(private activeRoute:ActivatedRoute){

   }

   localMessage : string;
   ngOnInit(){
      this.activeRoute.data.subscribe((msg)=>{
        
        console.log(msg);  //[{ 'Message' : '401 Not found page'}];
        this.localMessage = msg[0].Message;
      })
   }

}
