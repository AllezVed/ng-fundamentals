// service to ensure that the component only loads once data is completely loaded, done to counteract setTimeout subject call.

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventService } from './shared/event.service';
import { map } from 'rxjs/operators'
@Injectable()
export class EventResolver implements Resolve<any> {
    constructor(private eventService: EventService){
        
    }
    resolve(route: ActivatedRouteSnapshot){
        // return this.eventService.getEvents().pipe(map(events => events)) /* need to return the observable and not the subscription, hence we use map. 
        // These events will get passed along to the component to find in our route */

        return this.eventService.getEvent(route.params['id'])
    }
}