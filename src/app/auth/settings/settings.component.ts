import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FormGroup }  from '@angular/forms'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  genders = ['Male', 'Female'];
  constructor() { }

  ngOnInit() {
  }

}
