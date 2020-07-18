import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UserService } from '../../user.service'
import { Router, NavigationEnd} from '@angular/router';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']

})
export class ECommerceComponent implements OnInit {
  url: string = "";
  urlSafe: SafeResourceUrl;

  constructor( private router: Router, public sanitizer: DomSanitizer, private userService: UserService) { 
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if(event.url != '/user/profile'){
          this.ngOnInit();
        }
      }
    });
  }

  ngOnInit() {
    this.userService.modulePermission(this.router.url).subscribe(data => {
      if(data["success"]){
        this.url = data["data"];
        this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
      }
    },
    error => {
      let landingPage = JSON.parse(localStorage.getItem('userInfo')).modules
      this.router.navigate([landingPage[0].link]);
    })
  }
}
