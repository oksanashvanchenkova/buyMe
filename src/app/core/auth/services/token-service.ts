import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private ACCESS = 'access_token';
  private REFRESH = 'refresh_token';

  getAccessToken() {
    return localStorage.getItem(this.ACCESS);
  }

  getRefreshToken() {
    return localStorage.getItem(this.REFRESH);
  }

  setTokens(access: string, refresh: string) {
    localStorage.setItem(this.ACCESS, access);
    localStorage.setItem(this.REFRESH, refresh);
  }

  clear() {
    localStorage.removeItem(this.ACCESS);
    localStorage.removeItem(this.REFRESH);
  }
}
