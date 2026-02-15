import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonItem, IonLabel, IonList
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonItem, IonLabel, IonList,
    RouterLink
  ]
})
export class CatalogComponent implements OnInit {
  categoryTitle: string = '';
  private route = inject(ActivatedRoute)
  category = ["Wszystkie", "Bajki", "Lektura"]
  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    console.log(category)
  }
}
