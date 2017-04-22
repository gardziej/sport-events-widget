import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { EventsModule } from './events/events.module';
import { EventService } from './events/event.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EventsModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
