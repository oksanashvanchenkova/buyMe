import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonContent, IonGrid, IonRow, IonCol, IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';
import { IonSearchbar } from '@ionic/angular/standalone';
import { WelcomeComponent } from './components/welcome/welcome.component'
import { HomeStore } from './store/home.store';
import { ProductsListComponent } from 'src/app/shared/products-list/products-list.component';
import { LoaderSkeletonComponent } from 'src/app/shared/loader-skeleton/loader-skeleton.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterLink, IonSearchbar, WelcomeComponent, IonContent, IonGrid, IonRow, IonCol,
    LoaderSkeletonComponent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    ProductsListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  store = inject(HomeStore)
  constructor() { }

  ngOnInit() { }
  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    console.log(query)
  }
  loadMore(event: any) {
    const limit = window.innerWidth > 1024 ? 8 : 4;

    this.store.loadMore(limit);
    setTimeout(() => {
      (event.target as HTMLIonInfiniteScrollElement).complete();
    }, 500);
  }
}
