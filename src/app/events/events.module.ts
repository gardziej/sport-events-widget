import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';

import { EventListComponent } from './event-list/event-list.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

import { EventService } from './event.service';

@NgModule({
  declarations: [
    EventListComponent,
    EventDetailComponent
  ],
  providers: [
    EventService
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JsonpModule

  ],
  exports: [
    EventListComponent,
    EventDetailComponent
  ],
})
export class EventsModule {

}
