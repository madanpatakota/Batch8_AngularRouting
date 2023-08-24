import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { SchoolService } from './school.service';

// /you have to take the some information from service .

// you want to pass the information from service to router.

// if we subscribe the resolver then we can recevie the service information.
export const schoolResolver: ResolveFn<any> = () => {
  let output = [];
  output.push('hello world');

  //// take school details from school service

  // push the school details to the output array.

  
  return output;
};

//  export class schoolResolver implements ResolveFn<any>{

//   resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : any{

//         let output = [];
//         output.push("hello world");
//         return output;

//   }

//}
