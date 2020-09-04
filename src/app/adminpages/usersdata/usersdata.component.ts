import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.scss', './usersdata.component.css']

})
export class UserDetailsComponent {
  data: any;
  updateForm: any;
  deleteForm: any;
  createForm:any;
  usersList: [];
  allModules: any;
  showUsers : Boolean = false;
  closeResult: string;
  modalOptions: NgbModalOptions;
  selectedModules: any;
  updatename: String = "";
  updatedesignation: String = "";

  constructor(private adminService: AdminService, private modalService: NgbModal) {
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
      designation: "",
      modules:[],
      formType : "create",
      password: ""
    }

    this.deleteForm = {
      id: "",
      name: "",
      formType: "delete"
    }
    const data = { type: 'GET' }
    this.adminService.users(data).subscribe(response => {
      if (response['success']) {
        this.usersList = response['data'];
        if( response['data'].length){
          this.showUsers = true;
        }
        
      } else {
        this.usersList = [];
      }
    },
      error => {
        this.usersList = [];
      });

      this.adminService.getModules().subscribe(response => {
        if(response['success']){
          this.allModules = response['data'];
        }else{
          this.allModules = []; 
        }
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
        this.updatedesignation = user.designation;
        this.updateForm.id = user._id;
        this.selectedModules = user.permittedModules
        break;
    }
    
    this.modalService.open(content, this.modalOptions).result.then((result) => {
    }, (reason) => {

    });
  }

  createUser(name, password, designation, userModules){
    const userData = {name: name, password: password, designation: designation, permittedModules : userModules}

    this.adminService.createUser(userData).subscribe(response => {
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

  updateUser(){
    const updateData = {_id: this.updateForm.id, name: this.updatename, designation: this.updatedesignation, permittedModules : this.selectedModules}

    this.adminService.updateUser(updateData).subscribe(response => {
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

  deleteUser(){
    const updateData = {id: this.deleteForm.id}
    this.adminService.deleteUser(updateData).subscribe(response => {
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
