import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IonTextarea } from '@ionic/angular/standalone';

@Component({
  selector: 'app-description-control',
  templateUrl: './description-control.component.html',
  styleUrls: ['./description-control.component.scss'],
  imports: [IonTextarea],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionControlComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
