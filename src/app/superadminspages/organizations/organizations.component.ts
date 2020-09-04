import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../super-admin.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss', './organizations.component.css']

})
export class OrganizationsComponent {
  data: any;
  updateForm: any;
  deleteForm: any;
  createForm: any;
  organizationsList: [];
  showUsers : Boolean = false;
  closeResult: string;
  modalOptions: NgbModalOptions;
  selectedModules: any;
  updatename: String = "";
  updatelogo: String = "";

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
      id: "",
      name: "",
      formType: "create",
      logo: ""
    }

    this.deleteForm = {
      id: "",
      name: "",
      formType: "delete"
    }

    this.superAdminService.getOrg().subscribe(response => {
      if (response['success']) {
        this.organizationsList = response['data'];
        if( response['data'].length){
          this.showUsers = true;
        }
        
      } else {
        this.organizationsList = [];
      }
    },
      error => {
        this.organizationsList = [];
      });
  }

  open(content, user, type) {
    console.log(user, type)
    switch(type){
      case "delete":
        this.deleteForm.id = user._id;
        this.deleteForm.name = user.name;
        break;
      case "update":
        this.updatename = user.name;
        this.updatelogo = user.logo;
        this.updateForm.id = user._id;
        break;
    }
    
    this.modalService.open(content, this.modalOptions).result.then((result) => {
    }, (reason) => {

    });
  }

  createOrg(name, logo){
    const userData = {name: name, logo: logo}

    this.superAdminService.createOrg(userData).subscribe(response => {
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

  updateOrg(){
    const updateData = {_id: this.updateForm.id, name: this.updatename, logo: this.updatelogo}

    this.superAdminService.updateOrg(updateData).subscribe(response => {
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

  deleteOrg(){
    const updateData = {id: this.deleteForm.id}
    this.superAdminService.deleteOrg(updateData).subscribe(response => {
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
