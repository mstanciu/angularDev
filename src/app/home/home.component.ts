import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventList: {name: string, location: string, time: string, interestedIn: number}[] = [
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10},
    {name: 'Football', location:'Sud Arena', time:'20:00', interestedIn:10}
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
