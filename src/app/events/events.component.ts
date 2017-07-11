import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  
  eventList: { name: string, location: string, time: string, interestedIn: number }[] = [
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 },
    { name: 'Football', location: 'Sud Arena', time: '20:00', interestedIn: 10 }

  ];

  constructor() { }

  ngOnInit() {
  }

}
