import { Component  , OnInit} from '@angular/core';
import { SchoolService  } from '../school.service';
import { SchoolModel } from '../school.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],

})
export class SchoolComponent implements OnInit {
    constructor(private schoolService : SchoolService , private router : Router , private activateRouter : ActivatedRoute){

    }

    allSchoolsList : SchoolModel[] = [];

    //[]  = [{} , {}]

    ngOnInit(): void {
       this.allSchoolsList = this.schoolService.getSchoolsList();


       this.activateRouter.data.subscribe((value)=>{
           console.log(value);
       })

    }

    evtNavigation(schoolID:any){
       //this.router.navigate(['/school-details' , schoolID ])                                --param
       //this.router.navigate(['/school-details'] , { queryParams : { ID : schoolID}});       --querystring
       this.router.navigate(['/school-details'] , { fragment : schoolID});                    //--fragment
    }  











    
}
