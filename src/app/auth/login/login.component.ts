import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
// @ts-ignore
export class LoginComponent implements OnInit {

  username : string ='';
  password : string ='';
  role : string ='';

  roles : string[];

  constructor() {
    this.roles = [
      'admin',
      'user'
    ]
   }

  ngOnInit(): void {
  }
  login(){
    console.log(this.username+" "+this.password+" "+this.role)
  }

}
