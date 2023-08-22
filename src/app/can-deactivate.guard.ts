import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
   // in case if any user having the admin@gmail.com account then he can leave the page. other wise you should be stay.

      console.log("Hey here security guys are checking the my IDs")
        if(localStorage.getItem("username")   == "admin@gmail.com" ){
            console.log("Yeah this guy having the admin gmail.com .. so he can navigate to another screen")
             return true;
        }
        else{
          console.log("Yeah this guy is not having the admin account .. I do't give the permssion to go another scrren. you should stay. until you get the admin access........");
            return false;
        }
};
