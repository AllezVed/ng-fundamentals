
import {Routes} from '@angular/router'
import {
    EventsListComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventListResolver,
    CreateSessionComponent,
    EventResolver
} from './events/index'

import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventsListComponent, resolve: { events: EventListResolver } }, /* passing in an object called resolve and that object has a property events 
    that has the value EventListResolver. i.e. before resolving this route, call this EventListResolver. When that resolver finishes and returns data, add this data to the route
    as a property named 'events'.*/
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver} }, //colon is parameter placeholder eg: /events/1, /events/foo
    { path:'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo:'/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
]