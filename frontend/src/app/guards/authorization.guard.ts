import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";
@Injectable()
export class AuthorizationGuard{
  constructor(private autService:AuthService,private router:Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.autService.isAuthenticated){
     let requiredRoles=route.data['roles'];
     let userRoles=this.autService.roles;
     for (let role of userRoles){
       if (requiredRoles.includes(role)){
         return true
       }

     }
      return false;
    }

    else {
      this.router.navigateByUrl('/login');
      return false;
    }

  }

}
