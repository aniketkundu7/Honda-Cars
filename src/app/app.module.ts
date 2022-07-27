import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContactModule } from './modules/general/contact/contact.module';
import { LoginModule } from './modules/general/login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContactModule,
    // LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
