import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

// export const addressGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({ providedIn: 'root' })
export class addressGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!localStorage.getItem('address')) {
      this.router.navigate(['payment/address/select']);
      return false;
    } else return true;
  }
}
