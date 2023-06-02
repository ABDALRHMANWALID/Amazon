import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

// export const orderGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable({ providedIn: 'root' })
export class orderGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (localStorage.getItem('isAuth')) {
      if (localStorage.getItem('OrderProductsID')) {
        return true;
      } else {
        if (localStorage.getItem('CartProductsID')) {
          this.router.navigate(['../account/cart']);
          return false;
        } else {
          this.router.navigate(['../product']);
          return false;
        }
      }
    } else {
      this.router.navigate(['../auth']);
      return false;
    }
  }
}
