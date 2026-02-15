import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [IonButton, IonIcon, RouterLink],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
