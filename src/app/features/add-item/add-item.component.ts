import { Component, OnInit } from '@angular/core';
import { IonContent, IonInput, IonItem, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
  imports: [IonContent, IonInput, IonItem, IonList]
})
export class AddItemComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
