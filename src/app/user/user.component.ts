import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  opened = true;
  username : String = "";
  constructor() { }

  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('userInfo')).email;
  }

  ngOnDestroy() {
  }
 
  toggleSidebar() {
    this.opened = !this.opened;
  }

}
