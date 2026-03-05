import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonInput, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.scss'],
  imports: [IonInput, IonItem, IonList],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationViewComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
