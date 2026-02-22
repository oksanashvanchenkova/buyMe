import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../interfaces/books.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductItemsHttp {
  private http = inject(HttpClient);

  getItem(): Observable<Item[]> {
    const params = new HttpParams()
      .set('latest', 'true');

    return this.http.get<Item[]>(
      'http://192.168.0.205:3000/items',
      { params }
    );
  }
}
