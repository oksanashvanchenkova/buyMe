import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-images-control',
  templateUrl: './images-control.component.html',
  styleUrls: ['./images-control.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  imports: [IonLabel, IonContent, IonInput, IonItem, IonList, IonLabel],
})
export class ImagesControlComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  onFileSelected(file:any){
    
  }
}
