import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private loginUrl = '/api/login';
  private isAuthUrl = '/api/authorized';
  public isAuthentificated = null;

  constructor(
    private http: HttpClient
  ) {
    this.getAuth().subscribe(
      (resp) => this.isAuthentificated = resp
    );
  }

  public login(username, password): Observable<any> {
    const principal = {
      username,
      password
    };

    return this.http.post(this.loginUrl, principal);
  }

  public updateAuth(value) {
    this.isAuthentificated = value;
  }

  private getAuth(): Observable<boolean> {
    return this.http.get(this.isAuthUrl) as Observable<boolean>;
  }

}
