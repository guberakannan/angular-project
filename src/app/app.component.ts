import { Component, OnInit } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private menuService: NbMenuService,  private router: Router) {
  }

  onContecxtItemSelection(title) {
    switch(title){
      case "Log out":
        localStorage.removeItem('userInfo');
        this.router.navigate(['/user/login']);
      break;

      case "Profile":
        this.router.navigate(['/pages/profile']);
      break;
    }
  }

  ngOnInit(): void {

    this.menuService.onItemClick()
      .subscribe((event) => {
        this.onContecxtItemSelection(event.item.title);
      });
  }

  
}
