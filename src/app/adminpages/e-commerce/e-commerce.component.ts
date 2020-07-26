import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AdminService } from '../../admin.service'
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']

})
export class AdminECommerceComponent implements OnInit {
 

  constructor() { 
    
  }

  ngOnInit() {
    
  }
}
