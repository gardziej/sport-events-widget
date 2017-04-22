import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

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
      ).catch(this.handleError);
  }

  getEvents() {
    return this.events.slice();
  }

  getEvent(index: number) {
    return this.events[index];
  }

  private handleError (error: Response | any) {
    // use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
