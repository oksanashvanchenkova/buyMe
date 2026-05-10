import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  IonContent,
  IonInput,
  IonItem,
  IonList, IonButton } from '@ionic/angular/standalone';
import { ImagesControlComponent } from '../shared/images-control/images-control.component';
import { TitleControlComponent } from '../shared/title-control/title-control.component';
import { DescriptionControlComponent } from '../shared/description-control/description-control.component';
import { ItemConditionComponent } from '../shared/item-condition/item-condition.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonButton, 
    IonContent,
    IonInput,
    IonItem,
    IonList,
    ImagesControlComponent,
    TitleControlComponent,
    DescriptionControlComponent,
    ItemConditionComponent,
    ReactiveFormsModule,
    IonButton
  ],
})
export class BookFormComponent implements OnInit {
  constructor() {}
form = new FormGroup({
    images: new FormControl([]),
    title: new FormControl('', Validators.required),
    author: new FormControl(''),
    description: new FormControl('', Validators.maxLength(2000)),
    condition: new FormControl('new')
  });
  ngOnInit() {}
  onSubmit(){
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
