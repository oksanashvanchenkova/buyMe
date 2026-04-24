import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICredentials, IUserData, IUserRegistration } from '../../interfaces/auth.interfaces';
import { catchError, from, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
declare const google: any;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);


  userRegistration(userData: IUserRegistration): Observable<any> {
    return this.http.post<IUserRegistration>(`http://192.168.0.205:3000/auth/signup`, userData);
  }

  loginByCredentials(cred: ICredentials): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>('http://192.168.0.205:3000/auth/login', cred);
  }

  sendTokenToBackend(idToken: string): Observable<any> {
    console.log('--- Sending token to backend ---');

    return this.http.post(
      'https://tattoo-gbp-suffered-pillow.trycloudflare.com/auth/google',
      { idToken }
    );
  }
}
