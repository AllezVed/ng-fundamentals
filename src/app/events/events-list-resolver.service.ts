// service to ensure that the component only loads once data is completely loaded, done to counteract setTimeout subject call.

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators'
@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService){
        
    }
    resolve(){
        // return this.eventService.getEvents().pipe(map(events => events)) /* need to return the observable and not the subscription, hence we use map. 
        // These events will get passed along to the component to find in our route */

        return this.eventService.getEvents()
    }
}