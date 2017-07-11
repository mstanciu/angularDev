import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../authService'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @ViewChild('f') login:NgForm;
 
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  onSubmit() {
    this.auth.isLoggedIn = true;
    this.login.reset();
    console.log(this.auth.isLoggedIn + ' <---');
    this.router.navigate(['/']);
  }

}
