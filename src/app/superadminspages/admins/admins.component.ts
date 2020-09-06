import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../super-admin.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss', './admins.component.css']

})
export class AdminsComponent {
  data: any;
  updateForm: any;
  deleteForm: any;
  createForm:any;
  adminsList: [];
  allOrganizations: any;
  showAdmins : Boolean = false;
  closeResult: string;
  modalOptions: NgbModalOptions;
  updatename: String = "";
  updateOrganization: String = "";

  constructor(private superAdminService: SuperAdminService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
    this.data = [];
    this.updateForm = {
      id: "",
    }

    this.createForm = {
      name: "",
      formType : "create",
      password: ""
    }

    this.deleteForm = {
      id: "",
      name: "",
      formType: "delete"
    }
    
    this.superAdminService.admins().subscribe(response => {
      if (response['success']) {
        this.adminsList = response['data'];
        if( response['data'].length){
          this.showAdmins = true;
        }
        
      } else {
        this.adminsList = [];
      }
    },
      error => {
        this.adminsList = [];
      });

      this.superAdminService.getOrg().subscribe(response => {
        if(response['success']){
          this.allOrganizations = response['data'];
        }else{
          this.allOrganizations = []; 
        }
      });
  }

  open(content, user, type) {
    switch(type){
      case "delete":
        this.deleteForm.id = user._id;
        this.deleteForm.name = user.name;
        break;
      case "update":
        this.updatename = user.name;
        this.updateOrganization = user.organization;
        this.updateForm.id = user._id;
        break;
    }
    
    this.modalService.open(content, this.modalOptions).result.then((result) => {
    }, (reason) => {

    });
  }

  createAdmin(name, password, organization){
    const userData = {name: name, password: password, organization: organization}

    this.superAdminService.createAdmin(userData).subscribe(response => {
      window.location.reload();
    }, (error) => {
      
      if (error.error.errors != undefined && typeof error.error.errors === "string") {
        alert(error.error.errors)
      } else {
        if (error.error.errors != undefined && typeof error.error.errors !== "string") {
          alert(error.error.errors.message)
        } else {
          alert('Issue is on our side. Please try again later')
        }
      }
    });
  }

  updateAdmin(){
    const updateData = {_id: this.updateForm.id, name: this.updatename, organization: this.updateOrganization}

    this.superAdminService.updateAdmin(updateData).subscribe(response => {
      window.location.reload();
    }, (error) => {
      if (error.error.errors != undefined && typeof error.error.errors === "string") {
        alert(error.error.errors)
      } else {
        if (error.error.errors != undefined && typeof error.error.errors !== "string") {
          alert(error.error.errors.message)
        } else {
          alert('Issue is on our side. Please try again later')
        }
      }
    });
  }

  deleteAdmin(){
    const updateData = {id: this.deleteForm.id}
    this.superAdminService.deleteAdmin(updateData).subscribe(response => {
      window.location.reload();
    }, (error) => {
      if (error.error.errors != undefined && typeof error.error.errors === "string") {
        alert(error.error.errors)
      } else {
        if (error.error.errors != undefined && typeof error.error.errors !== "string") {
          alert(error.error.errors.message)
        } else {
          alert('Issue is on our side. Please try again later')
        }
      }
    });
  }

}
