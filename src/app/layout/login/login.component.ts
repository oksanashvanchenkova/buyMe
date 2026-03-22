import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, inject, NgZone, OnInit, signal } from '@angular/core';
import {
  IonContent, IonInput, IonItem, IonList, IonButton
} from '@ionic/angular/standalone';
import { LoginViewComponent } from './components/login-view/login-view.component'
import { LoginData } from './models/login-data';
import { RegistrationViewComponent } from './components/registration-view/registration-view.component'
import { IUserRegistration } from 'src/app/core/interfaces/auth.interfaces';
import { LoginStore } from './store/login.store';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [RegistrationViewComponent, LoginViewComponent, IonContent, IonButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  readonly store = inject(LoginStore);
readonly showRegistr = this.store.showRegistr;
  constructor(private zone: NgZone) {}

  showRegistration() {
    this.zone.run(() => {
      this.store.openRegistration(true);
    });
  }
}
