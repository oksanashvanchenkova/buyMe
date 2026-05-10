import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {IonGrid, IonRow, IonCol
} from '@ionic/angular/standalone';
import { ICategory } from 'src/app/features/home/interfaces/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
    imports: [RouterLink, IonGrid, IonRow, IonCol],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesComponent  implements OnInit {
categories=input<ICategory[]>()
  constructor() { }

  ngOnInit() {}

}
