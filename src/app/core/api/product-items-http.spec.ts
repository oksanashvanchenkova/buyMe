import { TestBed } from '@angular/core/testing';

import { ProductItemsHttp } from './product-items-http';

describe('ProductItemsHttp', () => {
  let service: ProductItemsHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductItemsHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
