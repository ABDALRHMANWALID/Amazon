import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

// export const cartGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({ providedIn: 'root' })
export class cartGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!localStorage.getItem('CartProductsID')) {
      this.router.navigate(['../product']);
      return false;
    } else return true;
  }
}
