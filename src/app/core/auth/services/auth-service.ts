import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import {
  ICredentials,
  IUserRegistration,
} from '../../interfaces/auth.interfaces';
import { Observable } from 'rxjs';
declare const google: any;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private tunel =
    'https://museum-infants-daisy-conventional.trycloudflare.com/';

  userRegistration(userData: IUserRegistration): Observable<any> {
    return this.http.post<IUserRegistration>(
      `http://192.168.0.205:3000/auth/signup`,
      userData,
    );
  }

  loginByCredentials(cred: ICredentials): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(
      'http://192.168.0.205:3000/auth/login',
      cred,
    );
  }

  sendTokenToBackend(idToken: string): Observable<any> {
    console.log('--- Sending token to backend ---');

    return this.http.post(this.tunel + 'auth/google', { idToken });
  }
}
