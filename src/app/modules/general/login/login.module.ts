import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from 'src/app/auth/login/login.component';
// import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [ 
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    // MatFormFieldModule
  ]
})
export class LoginModule { }
