import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksHttp {
  private http = inject(HttpClient);

getItem(): Observable<any> {
  const params = new HttpParams()
    .set('latest', 'true');

  return this.http.get<any>(
    'http://192.168.0.205:3000/items',
    { params }
  );
}
}
