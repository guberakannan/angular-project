import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'ngx-ecommerce',
  templateUrl: './e-commerce.component.html',
  styleUrls: ['./e-commerce.component.css']

})
export class ECommerceComponent implements OnInit {
  url: string = "https://app.powerbi.com/view?r=eyJrIjoiMWJlZGRkYzgtY2YzYS00ZDVkLWIzZjQtMGZmYjYwM2Y3ODU4IiwidCI6IjZhOTQ5YzUwLWU1MjgtNGM5YS05YjRlLTU3ZWMyMDc4YTk2OSJ9";
  urlSafe: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

}
