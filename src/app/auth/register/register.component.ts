import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('f') signUp: NgForm;
  answer = '';
  genders = ['male','female'];

  constructor() { }

  ngOnInit() {
    
  }

  onSubmit(form: NgForm) {
    //console.log('submitted');
    //console.log(form.value);
    console.log(this.signUp);
  }

}
