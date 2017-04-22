import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Event } from '../interfaces/Event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[];

  constructor(private eventService: EventService) { }

  fetchEvents(count: number) {
    this.eventService.fetchEvents().subscribe((events) => {
      this.events = events.slice(0,count);
    });
  }

  ngOnInit() {
    let timer = Observable.timer(0,60000);
    timer.subscribe(() => this.fetchEvents(5));
  }

}
