import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUserRegistration } from '../interfaces/auth.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private http = inject(HttpClient);

  userRegistration(userData: IUserRegistration): Observable<any> {
    return this.http.post<IUserRegistration>(`http://192.168.0.205:3000/auth/signup`, userData);
  }
}
