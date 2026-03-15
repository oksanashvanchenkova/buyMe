import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import {
  IonContent, IonInput, IonItem, IonList, IonButton
} from '@ionic/angular/standalone';
import { LoginViewComponent } from './components/login-view/login-view.component'
import { LoginData } from './models/login-data';
import { RegistrationViewComponent } from './components/registration-view/registration-view.component'
import { IUserRegistration } from 'src/app/core/interfaces/auth.interfaces';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  showRegistration = signal<boolean>(false);
  constructor() { }

  ngOnInit() { }
  loginSubmit(event: LoginData) {
    console.log(event)
  }
  submitRegistrationData(data: IUserRegistration) {

  }
  registr() {
    this.showRegistration.set(true)
  }
}
