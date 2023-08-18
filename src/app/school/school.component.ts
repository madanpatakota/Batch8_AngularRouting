import { Component  , OnInit} from '@angular/core';
import { SchoolService  } from '../school.service';
import { SchoolModel } from '../school.model';

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css'],

})
export class SchoolComponent implements OnInit {
    constructor(private schoolService : SchoolService){

    }

    allSchoolsList : SchoolModel[] = [];

    //[]  = [{} , {}]

    ngOnInit(): void {
       this.allSchoolsList = this.schoolService.getSchoolsList();
    }









    
}
