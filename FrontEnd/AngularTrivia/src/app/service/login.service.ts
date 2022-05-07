import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';


import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class LoginService {
    //private userSubject: BehaviorSubject<User>;
    //public user: Observable<User>;
    
    constructor(
        private router: Router,
        private http: HttpClient
    ) {
       // this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        //this.user = this.userSubject.asObservable();
    }



    // public get userValue(): User {
    //     return this.userSubject.value;
    // }

    login(username: string, password:string) {
        // return this.http.post<User>(`${environment.apiBaseURL}/User/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         localStorage.setItem('user', JSON.stringify(user));
        //         this.userSubject.next(user);
        //         return user;
        //     }));
        console.log(this.getByUsername(username));
    }

    // logout() {
    //     // remove user from local storage and set current user to null
    //     localStorage.removeItem('user');
    //     this.userSubject.next(null);
    //     this.router.navigate(['/account/login']);
    // }

    register(user: User) {
        
        console.log("Appear");
        return this.http.post<User>(`${environment.apiBaseURL}/Item/CreateNewUser/${user.username}/${user.password}`, user)
        .pipe(
        );
        //console.log(`${environment.apiBaseURL}/Item/CreateNewUser/${user.username}/${user.password}`);
        //return this.http.post(`${environment.apiBaseURL}/Item/CreateNewUser/${user.username}/${user.password}`, user);
        //this.http.post(`${environment.apiBaseURL}/Item/CreateNewUser/${user.username}/${user.password}`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiBaseURL}/users`);
    }
 
    getByUsername(username: string) {
        return this.http.get<any>(`${environment.apiBaseURL}/Item/SearchUser/${username}`);
    }



}
