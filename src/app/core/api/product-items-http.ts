import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItemsDto, Item } from '../interfaces/item.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductItemsHttp {
  private http = inject(HttpClient);

  getItem(page: number, limit: number): Observable<IItemsDto> {
    const params = new HttpParams()
      .set('latest', 'true')
      .set('limit', limit)
      .set('page', page)
      ;

    return this.http.get<IItemsDto>(
      'http://192.168.0.205:3000/items',
      { params }
    );
  }
}
