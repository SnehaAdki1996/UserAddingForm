import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap'
import { UserCreateComponent } from '../user-create/user-create.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.sass']
})
export class ListUserComponent implements OnInit {

  userData : any[] = []
  value: number = 0;
  maleCount : number = 0
  attachmentRef: NgbModalRef
  femaleCount:number = 0 
  constructor(
    private modalService: NgbModal,
    
  ) { }

  ngOnInit(): void {
    
    let obj =   
      [{
        gender : "Female",
        languages : ["Japnese","English"],
        userName: "XYZ",
        DOB: "10/20/2020"
      },
      {
        gender : "Male",
        languages : ["Japnese","French"],
        userName: "XYZ",
        DOB: "10/20/2020"
      },{
        gender : "Female",
        languages : ["Japnese","English"],
        userName: "PQR",
        DOB: "10/20/2020"
      }
      
    ]
    this.userData = obj
    this.getCount()
  }

    getCount(){
      
      this.femaleCount = 0
      this.maleCount = 0
      this.userData.map(ele => {
        if(ele.gender.toUpperCase()=="FEMALE")
          this.femaleCount ++;
        else if(ele.gender.toUpperCase()=="MALE")
          this.maleCount ++;
      })
      this.value = Math.round(((this.femaleCount+this.maleCount)/10) * 100)
    }

    createUser(){
      this.attachmentRef = this.modalService.open(UserCreateComponent, {
        windowClass: 'historyClass'
      });
      this.attachmentRef.result
			.then(data => {
        this.userData.push( data)
        this.getCount()
			},
				err => {
					
				}).catch(console.error);
   
     
    }
}
