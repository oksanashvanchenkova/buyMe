import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IonHeader, IonToolbar, IonButtons, IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonButtons,
    IonIcon
  ]
})
export class HeaderComponent implements OnInit {
  constructor() {
    addIcons({ personCircle });
  }

  ngOnInit() { }

}
