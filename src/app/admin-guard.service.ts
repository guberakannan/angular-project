import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminAuthService } from './admin-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate {

  constructor(private adminAuthService: AdminAuthService, private route: Router) { }

  canActivate() {
    if (this.adminAuthService.isAuthenticated()) {
      return true;
    }
    this.adminAuthService.deleteAdminInfo();
    this.route.navigate(['admins/login']);
    return false;
  }
}
