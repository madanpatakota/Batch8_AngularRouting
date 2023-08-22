import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from '../school.service';
import { SchoolDetailsModel } from '../school-details.model';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css'],
})
export class SchoolDetailsComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private schoolService: SchoolService
  ) {}

  // params
  // querystiring
  // fragment

  //school-details/School-2
  //school-details/:ID

  schoolDetails: any;
  ngOnInit(): void {
    // this.activateRoute.params.subscribe(function(param){
    //    console.log(param);   // {ID: '________'}
    //     //this.schooldetails =  this.schoolService.getSchoolDetails()
    // });

    // Params subscription
    this.activateRoute.params.subscribe((param: any) => {
      console.log(param); // {ID: '________'}
      //this.schoolDetails =  this.schoolService.getSchoolDetails();  // its return schooldetailsmodelsList

      //i am trying to find the object in the array based on router parameter.
      //then i am assinging output to the schooldetails.....
      this.schoolDetails = this.schoolService
        .getSchoolDetails()
        .find((school) => {
          return school.SchoolID == param.ID;
        });
      console.log(this.schoolDetails);
    });

    //QueryParams subscription
    this.activateRoute.queryParams.subscribe((qparam: any) => {
      console.log('queryPrama', qparam); //ID=School-1
      this.schoolDetails = this.schoolService
        .getSchoolDetails()
        .find((school) => {
          return school.SchoolID == qparam.ID;
        });
    });

    //fragment subsctption
    this.activateRoute.fragment.subscribe((fragmentparam)=>{
      console.log("fragment value is " , fragmentparam);
      this.schoolDetails = this.schoolService
        .getSchoolDetails()
        .find((school) => {
          return school.SchoolID == fragmentparam;
        });
    })


  }



  evtNormalUser(){
    localStorage.setItem("username","normaluser@gmail.com");
    
  }
  evtAdminUser(){
    localStorage.setItem("username","admin@gmail.com");
  }
}

// function CustomerName(ID){
//   return "JOhn";
// }
// CustomerName(1);

// var name = "John";

// you are assiging the function with parameter to the varaible.......
// var name = function(ID){
//    return "JOhn- Jr";
// }
// console.log(name(1));

// var arrowname = (ID, Location)=>{
//    return "JOhn- Jr- arrow";
// }
// console.log(arrowname(1,"Austraila"));
