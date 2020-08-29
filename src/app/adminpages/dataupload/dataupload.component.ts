import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-dataupload',
  templateUrl: './dataupload.component.html',
  styleUrls: ['./dataupload.component.scss']

})
export class DataUploadComponent implements OnInit {

  uploadForm: FormGroup;
  dynamicTables: any;
  selectedTable: any;
  showFileUpload: Boolean = false;
  uploadedFile : any;
  csvFile;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService, private router: Router) {
    this.dynamicTables = [];
    this.adminService.dynamicSchema({ type: 'GETACTIVE' }).subscribe(response => {
      this.dynamicTables = response['data'];
    },
      error => {
        this.dynamicTables = [];
      });

  }

  onSubmit() {
    this.adminService.dataSheet(this.selectedTable, this.csvFile).subscribe(response => {
      alert("Data Uploaded Successfully");
      window.location.reload();
    }, error => {
      alert('Issue is on our side. Please try again later')
    });
  }

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      tablename: ""
    });
  }

  onFileSelect($event): void {
    var input = $event.target;   
    this.csvFile = input.files[0];
  }

  changeTable(event) {
    if (event != "0") {
      this.showFileUpload = true
      this.selectedTable = event;
    } else {
      this.showFileUpload = false;
      this.selectedTable = '';
    }
  }

}
