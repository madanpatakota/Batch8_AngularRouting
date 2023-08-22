import { CanActivateFn } from '@angular/router';

export const canActiveGuardGuard: CanActivateFn = (route, state) => {

      //type keyword in the typescript
      console.log(route);
      console.log(state);
      console.log("Iam in at can active security guard. he is checking the my ID");

        if(localStorage.getItem("username")   == "admin@gmail.com" ){
             return true;
        }
        else{
            return false;
        }
};
