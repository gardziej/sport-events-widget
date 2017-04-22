import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { Event } from './interfaces/Event';

import "rxjs";

@Injectable()
export class EventService {

  eventsChanged = new Subject<Event[]>();

  private events: Event[] = [];

  constructor(private http: Http) { }


  fetchEvents() {
    return this.http.get('http://gardziejewski.pl/projekty/events-widget/proxy.php')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

  getEvents() {
    return this.events.slice();
  }

  getEvent(index: number) {
    return this.events[index];
  }

}
