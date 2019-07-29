import { Injectable } from '@angular/core'
import { IUser } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';



@Injectable()

export class AuthService {
    currentUser: IUser

    constructor(private http: HttpClient) {

    }
    loginUser(userName: string, password: string) {
        
        let loginInfo = { username: userName, password: password };
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post('/api/login', loginInfo, options).pipe(tap(data => {
            this.currentUser = <IUser>data['user'];
        }))
            .pipe(catchError(err => {
                return of(false);
            }));
    }
    isAuthenticated() {
        return !!this.currentUser;
    }
    checkAuthenticationStatus(){
        this.http.get('/api/currentIdentity').subscribe(data => {
            if(data instanceof Object){
                this.currentUser = <IUser>data;
            }
        })
    }
    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }
    logout(){
        this.currentUser = undefined;
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post('/api/logout', {}, options);
    }
}