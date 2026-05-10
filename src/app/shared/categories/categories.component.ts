import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ICategory } from 'src/app/features/home/interfaces/category.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  imports: [IonGrid, IonRow, IonCol],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent implements OnInit {
  categories = input<ICategory[]>();
  additioanalLink = input<string | null>(null);
  private readonly router = inject(Router);
  constructor() {}

  ngOnInit() {}
  redirectToCategory(category: ICategory): void {
    // this.router.navigate([
    //   this.additioanalLink() ?? category.linkData,
    //   category.routerData,
    // ]);
    console.log(this.additioanalLink(), category.routerData);
    if (this.additioanalLink()) {
      this.router.navigate([this.additioanalLink(), category.routerData]);
    } else {
      this.router.navigate([category.linkData, category.routerData]);
    }
  }
}
