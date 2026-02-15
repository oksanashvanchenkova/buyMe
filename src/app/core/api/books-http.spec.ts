import { TestBed } from '@angular/core/testing';

import { BooksHttp } from './books-http';

describe('BooksHttp', () => {
  let service: BooksHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
