import { ChangeDetectionStrategy, Component, inject, input, OnInit } from '@angular/core';
import { IonItem, IonLabel, IonList, IonThumbnail, IonBadge, IonText, IonButton, IonIcon } from '@ionic/angular/standalone';
import { Item } from 'src/app/core/interfaces/books.interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  imports: [IonItem, IonLabel, IonList, IonThumbnail, IonBadge, IonText, IonButton, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {
  productItems = input<Item[] | null>(null)
  constructor() { }

  ngOnInit() {
  }
  addToCart(item: Item) { }
}
