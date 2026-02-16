import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonLabel, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonLabel, IonButton]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
