import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormGroup }  from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signUp: NgForm;
  signUpGroup: FormGroup;
  answer = '';
  genders = ['Male','Female'];

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    // console.log(this.signUp.value.userData);
    console.log(form);
    this.signUp.reset();

  }
}

class User {
  private email: string;
  private password: string;
  private secretQ: string;
  private secretA: string;
  private gender: string;
}
