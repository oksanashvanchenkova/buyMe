import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksHttp {
  private http = inject(HttpClient);

  getBooks(): Observable<any> {
    return this.http.get<any>('http://192.168.0.205:3000/books')
  }
}
