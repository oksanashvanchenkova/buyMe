import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IonItem,
  IonSelect,
  IonSelectOption,
  IonText,
  IonList,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-item-condition',
  templateUrl: './item-condition.component.html',
  styleUrls: ['./item-condition.component.scss'],
  imports: [IonList, IonText, IonItem, IonSelect, IonSelectOption],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemConditionComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
