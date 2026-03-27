import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import {
  IonContent, IonButton
} from '@ionic/angular/standalone';
import { LoginViewComponent } from './components/login-view/login-view.component'
import { RegistrationViewComponent } from './components/registration-view/registration-view.component'
import { LoginStore } from './store/login.store';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [RegistrationViewComponent, LoginViewComponent, IonContent, IonButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  showRegistr = signal<boolean>(false)
  store = inject(LoginStore);
  showRegistration() {
    this.showRegistr.set(true);
    this.store.openRegistration(true)
  }
  hideRegistration() {
    this.showRegistr.set(false);
    this.store.openRegistration(false)
  }
  constructor() {
  }
  ngOnInit() {
    this.store.openRegistration(false)
    setTimeout(() => {
      this.store.openRegistration(true)
    }, 3000)
  }
}
