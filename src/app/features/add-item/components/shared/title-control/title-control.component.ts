import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput, IonItem } from '@ionic/angular/standalone';

@Component({
  selector: 'app-title-control',
  templateUrl: './title-control.component.html',
  styleUrls: ['./title-control.component.scss'],
  imports: [IonInput, IonItem],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TitleControlComponent,
      multi: true
    }
  ]
})
export class TitleControlComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
