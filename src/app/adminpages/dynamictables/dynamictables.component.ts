import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { AdminService } from '../../admin.service'
@Component({
  selector: 'ngx-dynamictables',
  templateUrl: './dynamictables.component.html',
  styleUrls: ['./dynamictables.component.scss']

})
export class DynamicTablesComponent {
  data: any;
  settings = {
    actions: {
      position: 'right'
    },
    columns: {
      schemaIdentifier: {
        title: 'Table ID',
        type: 'string',
        editable: false
      },
      name: {
        title: 'Table Name',
        type: 'string'
      },
      status: {
        title: 'Status',
        editor: {
          type: 'list',
          config: {
            selectText: 'Select Status',
            list: [
              { value: 'active', title: 'active' },
              { value: 'inactive', title: 'inactive' }
            ]
          }
        }
      }
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private adminService: AdminService) {
    this.data = [];
    this.adminService.dynamicSchema({ type: 'GET' }).subscribe(response => {
      this.data = response['data'];
      this.source.load(this.data);
    },
      error => {
        this.source.load(this.data);
      });

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      
      const data = { data: event.data, type: 'DELETE' }
      this.adminService.dynamicSchema(data).subscribe(response => {
        event.confirm.resolve();
      },
      error => {

      });

      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onEditConfirm(event): void {
    const data = { data: event.newData, type: 'UPDATE' }
    this.adminService.dynamicSchemaUpdate(data).subscribe(response => {
      event.confirm.resolve();
    },
      error => {
        event.confirm.reject();
        if (error['error'].error != undefined) {
          if (error['error'] != undefined && error['error'].error != undefined && typeof error['error'].error === "string") {
            alert(error['error'].error)
          } else {
            alert('Issue is on our side. Please try again later')
          }
        } else {
          alert('Issue is on our side. Please try again later')
        }
      });
  }

  onCreateConfirm(event): void {
    const data = { data: event.newData, type: 'CREATE' }
    this.adminService.dynamicSchema(data).subscribe(response => {
      event.confirm.resolve();
    },
      error => {
        event.confirm.reject();
        if (error['error'].errors != undefined) {
          alert(error['error'].errors.messages)
        } else {
          if (error.error != undefined && error.error.error != undefined && typeof error.error.error === "string") {
            alert(error.error.error)
          } else {
            alert('Issue is on our side. Please try again later')
          }
        }
      });
  }
}
