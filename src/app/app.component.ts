import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private menuService: NbMenuService,  private router: Router) {}

  userNavigation(item) {
    let title = item.title;
    switch(title){
      case "Log out":
        localStorage.removeItem('userInfo');
        this.router.navigateByUrl('/user/login');
       break;

      case "Profile":
        this.router.navigateByUrl('/user/profile');
       break;

      default:
        this.router.navigateByUrl(item.link);
        break;
    }
  }

  adminNavigation(item) {
    let title = item.title;
    switch(title){
      case "Log out":
        localStorage.removeItem('adminInfo');
        this.router.navigateByUrl('/admins/login');
       break;

      case "Profile":
        this.router.navigateByUrl('/admins/profile');
       break;

      default:
        this.router.navigateByUrl('/admins/upload');
        break;
    }
  }
  

  ngOnInit(): void {

    this.menuService.onItemClick()
      .subscribe((event) => {

        switch(this.router.url.split('/')[1]){
          case "admins":
            this.adminNavigation(event.item);
            break;
          default:
            this.userNavigation(event.item);
            
            break;
        }
      });
  }
}
