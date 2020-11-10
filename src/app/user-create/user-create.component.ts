import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.sass']
})
export class UserCreateComponent implements OnInit {

  constructor(private activeModal:NgbActiveModal) { }


  selectedLanguages : []
  //date1 
  city : string
  currentUSerData  :any
  languagesData = [{
    name:"English"
  },
  {
    name:"French" 
  },
  {
    name:"Hindi"
  },
  {
    name:"Tamil"
  }
]
  genders : ['Female','Male'];

  // {name: 'New York', code: 'NY'},
  //           {name: 'Rome', code: 'RM'},
  //           {name: 'London', code: 'LDN'},
  //           {name: 'Istanbul', code: 'IST'},
  //           {name: 'Paris', code: 'PRS'}

 

  @ViewChild('createForm') createForm : NgForm
  ngOnInit(): void {
      console.log(this.languagesData)
  }

  onSubmit(createForm : NgForm){
    var languages = []

    this.createForm.value.languages.forEach(element => {
        languages.push(element.name)
    });
    let object = {
        gender : this.createForm.value.city,
        languages : languages,
        userName : this.createForm.value.userNameValue,
        DOB :this.createForm.value.dob,
      }
      this.currentUSerData = object
    console.log(createForm)
    this.activeModal.close(object);
  }
}
