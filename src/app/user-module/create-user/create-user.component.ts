import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormArray,
} from '@angular/forms';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent {
  imageUrl: string = '/assets/image/fffffff.png';
  fileToUpload: File = null;

  closeResult = '';

  technologies: Array<String> = ['C', 'C++', 'Java', 'Python', 'JavaScript'];
  selectedTechnologies = [];
  selectTechnologyError: Boolean = true;
  nameArray = [];
  genderArray = [];
  emailArray = [];
  mobileArray = [];
  categoryArray = [];
  technologyArray = [];
  imageUrlArray = [];
  signupForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private modalService: NgbModal,
    private _userService: UserService
  ) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z A-Z]*'),
        Validators.minLength(2),
        Validators.maxLength(30),
      ]),
      gender: new FormControl('male', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      )]),
      mobile: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10),
        Validators.pattern(/^[6-9]\d{9}$/),
      ]),
      category: new FormControl('', Validators.required),
      selecttechnology: this.addTechnologiesControls(),
      profilepic: new FormControl('', [
        Validators.pattern('.+(jpg|png|jpeg)'),
      ]),
    });
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  addTechnologiesControls() {
    const arr = this.technologies.map((element) => {
      return this._fb.control(false);
    });

    return this._fb.array(arr);
  }

  get technologiesArray() {
    return <FormArray>this.signupForm.get('selecttechnology');
  }

  getSelectedTechnologies() {
    this.selectedTechnologies = [];
    this.technologiesArray.controls.forEach((control, i) => {
      if (control.value) {
        this.selectedTechnologies.push(this.technologies[i]);
      }
    });

    this.selectTechnologyError =
      this.selectedTechnologies.length > 0 ? false : true;
  }

  checkTechnologyIsTouched() {
    let flg = false;
    this.technologiesArray.controls.forEach((control) => {
      if (control.touched) {
        flg = true;
      }
    });
    return flg;
  }

  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  saveUserData() {
    this.nameArray.push(this.signupForm.value.name);  
    this.genderArray.push(this.signupForm.value.gender);
    this.emailArray.push(this.signupForm.value.email);  
    this.mobileArray.push(this.signupForm.value.mobile);  
    this.categoryArray.push(this.signupForm.value.category);
    this.technologyArray.push(this.selectedTechnologies);
    this.imageUrlArray.push(this.imageUrl);

    this._userService.saveUserData(this.signupForm.value.name,this.signupForm.value.gender,this.signupForm.value.email,this.signupForm.value.mobile,this.signupForm.value.category,
      this.selectedTechnologies,this.imageUrl);

    alert('Record Saved');
  }
}
