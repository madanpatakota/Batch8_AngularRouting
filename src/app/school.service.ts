import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class SchoolService {
 
 
  getSchoolsList(){
     return this.schoolsList;
  }
  
 private schoolsList = [
    {
      Name: 'Kidzee',
      Location: 'HSR Layout',
      ID: 'School-1',
      Rating: 4,
      CityName: 'Bangolore',
    },
    {
      Name: 'EuroKids',
      Location: 'SilkBoard',
      ID: 'School-2',
      Rating: 4,
      CityName: 'Bangolore',
    },
    {
      Name: 'Delhi Public School',
      Location: 'Kormangla',
      ID: 'School-3',
      Rating: 4,
      CityName: 'Bangolore',
    }
  ];


  // i have prepared the model for this schooldetail
 private schoolDetails = [
    {
      SchoolID: 'School-1',
      PrinicipleName: 'NarayanaMoorthy',
      studentsCount: 200,
      EstablishDate: 1990,
      CityName: 'Bangolore',
      StateName: 'Karnataka',
      isGood: true,
      EmailID : "kidgee@gmail.com"
    },
    {
      SchoolID: 'School-2',
      PrinicipleName: 'Ramachandrudu',
      studentsCount: 210,
      EstablishDate: 2000,
      CityName: 'Bangolore',
      StateName: 'Karnataka',
      isGood : true,
      EmailID : "EuroKids@gmail.com"
    },
    {
      SchoolID: 'School-3',
      PrinicipleName: 'Prathapudu',
      studentsCount: 180,
      EstablishDate: 1995,
      CityName: 'Bangolore',
      StateName: 'Karnataka',
      isGood : true,
      EmailID : "DelhiPublicSchool@gmail.com"
    }
  ]

  getSchoolDetails(){
    return this.schoolDetails;
 }






}
