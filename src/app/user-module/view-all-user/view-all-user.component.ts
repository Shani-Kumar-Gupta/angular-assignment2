import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-view-all-user',
  templateUrl: './view-all-user.component.html',
  styleUrls: ['./view-all-user.component.css']
})
export class ViewAllUserComponent implements OnInit {

  

  nameArray =[];
  genderArray = [];
  emailArray = [];
  mobileArray = [];
  categoryArray = [];
  technologyArray = [];
  imageUrlArray = [];

  constructor(private _viewUser: UserService) { }

  public ngOnInit(): void {
    
    this.nameArray = this._viewUser.getUserData("name");
    this.genderArray = this._viewUser.getUserData("gender");
    this.emailArray = this._viewUser.getUserData("email");
    this.mobileArray = this._viewUser.getUserData("mobile");
    this.categoryArray = this._viewUser.getUserData("category");
    this.technologyArray = this._viewUser.getUserData("technology");
    this.imageUrlArray = this._viewUser.getUserData("imageUrl");

  }

  
}
