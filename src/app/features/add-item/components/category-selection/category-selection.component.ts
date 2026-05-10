import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { IonContent, IonRouterOutlet } from "@ionic/angular/standalone";
import { CategoriesComponent } from 'src/app/shared/categories/categories.component';
import { AddItemStore } from '../../store/add-item-store';

@Component({
  selector: 'app-category-selection',
  templateUrl: './category-selection.component.html',
  styleUrls: ['./category-selection.component.scss'],
    imports: [IonContent, CategoriesComponent],
    changeDetection: ChangeDetectionStrategy.Default
})
export class CategorySelectionComponent  implements OnInit {
  readonly store = inject(AddItemStore);
  constructor() { }

  ngOnInit() {}

}
