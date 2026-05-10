import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';
import { ImagesControlComponent } from '../shared/images-control/images-control.component';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    IonLabel,
    IonContent,
    IonInput,
    IonItem,
    IonList,
    ImagesControlComponent,
  ],
})
export class BookFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
