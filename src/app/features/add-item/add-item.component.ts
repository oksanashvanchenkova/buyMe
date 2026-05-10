import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AddItemStore } from './store/add-item-store';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  imports: [IonRouterOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddItemComponent {
  readonly store = inject(AddItemStore);
  constructor() {}
}
