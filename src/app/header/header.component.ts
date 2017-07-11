import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
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
    console.log(this.auth.isLoggedIn + ' ceva');
  }

  isLoggedIn() {
    console.log('>>>>>> ' + this.auth.isLoggedIn);
    return this.auth.isLoggedIn;
  }

  isLoggedOut() {
    return !this.auth.isLoggedIn;
  }

  logout() {
    this.auth.isLoggedIn = false;
  }
}
