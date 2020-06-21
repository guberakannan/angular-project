import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterceptService } from '../services/intercept.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  constructor(private router: Router, public loader: InterceptService) {}

  ngOnInit() {
    this.router.navigate(['/user/dashboard']);
  }

}
