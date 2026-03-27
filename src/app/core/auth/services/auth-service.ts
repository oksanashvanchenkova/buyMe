import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ICredentials, IUserData, IUserRegistration } from '../../interfaces/auth.interfaces';
import { catchError, from, map, Observable, switchMap, tap, throwError } from 'rxjs';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';

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

  // loginWithGoogle(): Observable<any> {
  //   return from(GoogleAuth.signIn()).pipe(
  //     map(googleUser => googleUser.authentication.idToken),
  //     tap((r) => console.log('TEST', r)),
  //     switchMap((idToken:any) =>
  //       this.http.post('http://192.168.0.205:3000/auth/google', { idToken: idToken.account_id })
  //     ),
  //     catchError(err => {
  //       console.error('RxJS Auth Error:', err);
  //       return throwError(() => err);
  //     })
  //   );
  // }

loginWithGoogle(): Observable<any> {
  console.log('--- 1. Початок GoogleAuth.signIn() ---');

  return from(GoogleAuth.signIn()).pipe(
    // Логуємо сирий об'єкт від Google
    tap(googleUser => console.log('--- 2. Отримано обʼєкт від Google:', googleUser)),

    // Витягуємо токен
    map(googleUser => googleUser.authentication.idToken),

    // Перевіряємо, чи токен не undefined/null перед наступним кроком
    tap(token => {
      if (!token) console.error('КРИТИЧНО: Токен відсутній у відповіді Google!');
    }),

    // Перемикаємося на запит до бекенду
    switchMap(token => this.sendTokenToBackend(token)),

    // Логуємо успіх від сервера
    tap(response => console.log('--- 4. Успішна відповідь сервера:', response)),

    catchError(err => {
      // Тут ми побачимо, на якому етапі сталася помилка
      console.error('СТАЛАСЯ ПОМИЛКА В ПОТОЦІ:', err);
      return throwError(() => err);
    })
  );
}
sendTokenToBackend(token: string): Observable<any> {
  console.log('--- 3. Відправка токена на сервер ---', token);
  return this.http.post('http://192.168.0.205:3000/auth/google', { idToken: token });
}
}
