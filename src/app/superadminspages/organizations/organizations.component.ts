import { Component, OnInit } from '@angular/core';
import { SuperAdminService } from '../../super-admin.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';

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
  uploadedFile : any;
  logo;
  updatedLogo;
  apiurl = environment.apiUrl;

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
    switch(type){
      case "delete":
        this.deleteForm.id = user._id;
        this.deleteForm.name = user.name;
        break;
      case "update":
        this.updatename = user.name;
        this.updateForm.id = user._id;
        break;
    }
    
    this.modalService.open(content, this.modalOptions).result.then((result) => {
    }, (reason) => {

    });
  }

  onFileSelect($event): void {
    var input = $event.target;   
    this.logo = input.files[0];
  }
  
  onFileUpdate($event): void{
    var input = $event.target;   
    this.updatedLogo = input.files[0];
  }

  createOrg(name){
    if(name != "" && name != null){
      this.superAdminService.createOrg(name, this.logo).subscribe(response => {
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
    }else{
      alert('Organization name is required')
    }
  }

  updateOrg(){
    const updateData = {id: this.updateForm.id, name: this.updatename}

    this.superAdminService.updateOrg(updateData, this.updatedLogo).subscribe(response => {
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
