import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']

})
export class ValidationComponent {
  constructor(private router: Router) { 
    let landingPage = JSON.parse(localStorage.getItem('userInfo')).modules;
    this.router.navigate([landingPage[0]]);
  }
}
