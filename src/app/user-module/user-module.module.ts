import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user/create-user.component';
import { ViewAllUserComponent } from './view-all-user/view-all-user.component';
import { UserModuleRoutingModule } from './user-module-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

//import { NgbModalBasic } from './modal-basic';


@NgModule({
  declarations: [CreateUserComponent, ViewAllUserComponent, ],
  imports: [
    CommonModule,
    UserModuleRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //NgbModule.forRoot(),
    NgbPaginationModule, 
    NgbAlertModule
    //CreateUserComponent,
    //ViewAllUserComponent
  ]
})
export class UserModuleModule { }
