import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IonContent, IonInput, IonItem, IonList, IonButton
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [IonContent, IonInput, IonItem, IonList, IonButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
