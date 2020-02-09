import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router) { }
    canActivate(route, state: RouterStateSnapshot){
        if (this.authService.isLoggedIn()) { return true }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } })
        return false
    }
}
