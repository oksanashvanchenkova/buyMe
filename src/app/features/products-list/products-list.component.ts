import { Component, inject, OnInit } from '@angular/core';
import { BooksHttp } from 'src/app/core/api/books-http';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  private booksHttp = inject(BooksHttp)
  constructor() { }

  ngOnInit() {
    this.booksHttp.getBooks().subscribe(console.log)
  }

}
