import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { ICategory } from './interfaces/category.interface';
import { CATEGORY_ITEMS } from './consts/category-items';
import { IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonButton, IonIcon, RouterLink, IonLabel, IonSearchbar],
})
export class HomeComponent implements OnInit {
  categories: ICategory[] = CATEGORY_ITEMS
  constructor() { }

  ngOnInit() { }
  handleInput(event: Event) {
    const target = event.target as HTMLIonSearchbarElement;
    const query = target.value?.toLowerCase() || '';
    console.log(query)
  }

}
