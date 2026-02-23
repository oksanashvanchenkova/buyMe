import { ChangeDetectionStrategy, Component, input, OnInit, signal } from '@angular/core';
import { IonIcon, IonCol, IonGrid, IonRow } from '@ionic/angular/standalone';
import { Item } from 'src/app/core/interfaces/item.interfaces';
import { addIcons } from 'ionicons';
import { heartOutline, cartOutline, heart } from 'ionicons/icons';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  imports: [IonIcon, IonCol, IonGrid, IonRow],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {
  productItems = input<Item[] | null>(null);
  favoriteIds = signal<Set<number>>(new Set());
  onFavoriteClick(item: Item) {
    const current = new Set(this.favoriteIds());

    if (current.has(item.id)) {
      current.delete(item.id);
      console.log('Removed from favorites:', item);
    } else {
      current.add(item.id);
      console.log('Added to favorites:', item);
    }

    this.favoriteIds.set(current);
  }

  onCartClick(item: any) {
    console.log('Add to cart clicked:', item);
  }
  constructor() {
    addIcons({
      heartOutline,
      cartOutline,
      heart
    });
  }

  ngOnInit() {
  }
  addToCart(item: Item) {

  }
}
