import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { LoginComponent } from '../auth/login/login.component';
import { AuthService } from '../auth/authService';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) {
    
  }

  ngOnInit() {
    if(this.auth.isLoggedIn){
      
    }
    else {

    }
  }

}
