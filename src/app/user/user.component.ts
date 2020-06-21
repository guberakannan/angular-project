import { Component, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  
  constructor() { }

  ngOnInit() {
    
  }

  ngOnDestroy() {
  }

  opened = true;
 
  toggleSidebar() {
    this.opened = !this.opened;
  }

}
