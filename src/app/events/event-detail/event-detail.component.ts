import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../interfaces/Event';
import * as moment from 'moment';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {
  @Input() event: Event;
  id: number;
  sportsGroups: string;
  href: string;
  starts: any;
  startsString: string;
  left: any;

  constructor() { }

  ngOnInit() {
    this.sportsGroups = this.event.sports_groups.map(function(elem) { return elem.name; }).join(", ");
    this.href = 'https://lvbet.pl/sports/zaklady/zaklady-przedmeczowe/' + this.event.sports_groups.map(function(elem) { return elem.id; }).join("/") + '/';
    this.starts = moment.utc(this.event.date);
    this.startsString = this.starts.local().format('YYYY-MM-DD HH:mm');
    this.left = this.starts.diff(moment(), 'minutes');
  }


}
