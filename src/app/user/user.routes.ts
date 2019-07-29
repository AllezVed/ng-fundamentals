import { ProfileComponent } from './profile.component'
import { LoginComponent } from './login.component';


export const userRoutes = [
    { path: 'profile', component: ProfileComponent }, // route seems like it should be /profile but it should actually be /user/profile
    { path : 'login', component: LoginComponent }
]