import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  public loginEvent = new EventEmitter<any>();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  signup(username: string, password: string, admin: boolean) {
    return this.http.post('/api/signup', {
      username: username,
      password: password,
      admin: admin
    }).pipe(
      tap((res: any) => {
        if(!res) return null;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 3000);

        return res;
      })
    )
  }

  login(username: string, password: string) {
    return this.http.post('/api/login', {
      username: username,
      password: password
    })
    .pipe(
      tap((( res:any ) => {
        if(!res) return null;
        localStorage.setItem('token', res.token);
        this.loginEvent.next('logged in')

        return this.router.navigate(['']);
      })
      )
    )
  }
}
