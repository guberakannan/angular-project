import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngx-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss', './modules.component.css']

})
export class ModulesComponent {
  data: any;
  updateForm: any;
  deleteForm: any;
  modulesList: [];
  showModules: Boolean = false;
  closeResult: string;
  modalOptions: NgbModalOptions;
  selectedModules: any;
  updatename: String = "";
  updateparent: String = "";
  updatelink: String="";
  updatecontent: String="";

  constructor(private adminService: AdminService, private modalService: NgbModal) {
    this.modalOptions = {
      backdrop: 'static',
      backdropClass: 'customBackdrop'
    }
    this.data = [];
    this.updateForm = {
      id: "",
    }

    this.deleteForm = {
      id: "",
      name: "",
      formType: "delete"
    }
    const data = { type: 'GET' }

    this.adminService.getModules().subscribe(response => {
      if (response['success']) {
        if( response['data'].length){
          this.showModules = true;
        }
        this.modulesList = response['data'];
      } else {
        this.modulesList = [];
      }
    });
  }

  open(content, moduledata, type) {
    switch (type) {
      case "delete":
        this.deleteForm.id = moduledata._id;
        this.deleteForm.name = moduledata.name;
        break;
      case "update":
        this.updatename = moduledata.title;
        this.updateparent = moduledata.parent;
        this.updatelink = moduledata.link.split("/user/pages/")[1];
        this.updateForm.id = moduledata._id;
        this.updatecontent = moduledata.content
        break;
    }

    this.modalService.open(content, this.modalOptions).result.then((result) => {
    }, (reason) => {

    });
  }

  createModule(name, parent, link, content) {
    const moduleData = { title: name, parent: parent, link: link, content: content }

    this.adminService.createModule(moduleData).subscribe(response => {
      window.location.reload();
    }, (error) => {
      if (error.error.errors != undefined) {
        alert(error.error.errors.message)
      } else {
        if (error.error != undefined && error.error.error != undefined && typeof error.error.error === "string") {
          alert(error.error.error)
        } else {
          alert('Issue is on our side. Please try again later')
        }
      }
    });
  }

  updateModule() {
    const updateData = { _id: this.updateForm.id, title: this.updatename, parent: this.updateparent, link: this.updatelink, content: this.updatecontent }

    this.adminService.updateModule(updateData).subscribe(response => {
      window.location.reload();
    }, (error) => {
      if (error.error.errors != undefined) {
        alert(error.error.errors.message)
      } else {
        if (error.error != undefined && error.error.error != undefined && typeof error.error.error === "string") {
          alert(error.error.error)
        } else {
          alert('Issue is on our side. Please try again later')
        }
      }
    });
  }

  deleteModule() {
    // this.deleteForm.id
    const updateData = { id: this.deleteForm.id }
    this.adminService.deleteModule(updateData).subscribe(response => {
      window.location.reload();
    }, (error) => {
      if (error.error.errors != undefined) {
        alert(error.error.errors.message)
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
