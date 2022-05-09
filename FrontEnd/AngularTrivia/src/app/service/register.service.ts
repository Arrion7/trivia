import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class registerService {
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

    register(username: string, password:string) {
        // return this.http.post<User>(`${environment.apiBaseURL}/User/authenticate`, { username, password })
        //     .pipe(map(user => {
        //         localStorage.setItem('user', JSON.stringify(user));
        //         this.userSubject.next(user);
        //         return user;
        //     }));
        console.log(this.getByUsername(username));
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiBaseURL}/users`);
    }

    getByUsername(username: string) {
        return this.http.get<any>(`${environment.apiBaseURL}/Item/SearchUser/${username}`);
      ;
    }

}
