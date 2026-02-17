import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonLabel, IonButton, IonMenu,
  IonMenuButton, IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonLabel, IonButton, IonButtons,
    IonMenu,
    IonMenuButton, IonIcon
  ]
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({ personCircle });
  }

  ngOnInit() { }

}
