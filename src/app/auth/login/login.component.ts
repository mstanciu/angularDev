import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authService'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') login:NgForm;

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.isLoggedIn = true;
    this.login.reset();
  }

}
