import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  nameArray = [];
  genderArray = [];
  emailArray = [];
  mobileArray = [];
  categoryArray = [];
  technologyArray = [];
  imageUrlArray = [];

  saveUserData(name, gender, email, mobile, category, technology, imageUrl) {
    this.nameArray.push(name);
    this.genderArray.push(gender);
    this.emailArray.push(email);
    this.mobileArray.push(mobile);
    this.categoryArray.push(category);
    this.technologyArray.push(technology);
    this.imageUrlArray.push(imageUrl);
  }
  getUserData(param:string){
    switch(param){
      case "name" : return this.nameArray; break; 
      case "gender" : return this.genderArray; break; 
      case "email" : return this.emailArray; break; 
      case "mobile" : return this.mobileArray; break;
      case "category" : return this.categoryArray; break;
      case "technology" : return this.technologyArray; break;
      case "imageUrl" : return this.imageUrlArray; break;
    }
  }
}
