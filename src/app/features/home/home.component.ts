import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton,  IonLabel, IonContent, IonGrid , IonRow, IonCol} from '@ionic/angular/standalone';
import { ICategory } from './interfaces/category.interface';
import { CATEGORY_ITEMS } from './consts/category-items';
import { IonSearchbar } from '@ionic/angular/standalone';
import { WelcomeComponent } from './components/welcome/welcome.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonButton,RouterLink, IonLabel, IonSearchbar, WelcomeComponent, IonContent, IonGrid , IonRow,  IonCol],
  changeDetection: ChangeDetectionStrategy.OnPush
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
