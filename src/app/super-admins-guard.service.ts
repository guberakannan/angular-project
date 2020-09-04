import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SuperAdminsAuthService } from './super-admins-auth.service';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminsGuardService implements CanActivate {

  constructor(private superAdminsAuthService: SuperAdminsAuthService, private route: Router) { }

  canActivate() {
    if (this.superAdminsAuthService.isAuthenticated()) {
      return true;
    }
    this.superAdminsAuthService.deleteSuperAdminInfo();
    this.route.navigate(['super-admins/login']);
    return false;
  }
}
