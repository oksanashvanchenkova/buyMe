import { ChangeDetectionStrategy, Component, effect, inject, NgZone, signal } from '@angular/core';
import {
  IonContent, IonButton
} from '@ionic/angular/standalone';
import { LoginViewComponent } from './components/login-view/login-view.component'
import { RegistrationViewComponent } from './components/registration-view/registration-view.component'
import { LoginStore } from './store/login.store';


declare const google: any;

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

  ngOnInit(): void {
    this.initializeGoogleSignIn();
  }

  initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: '1094302961148-8vqebc8n688s4gop3kbgvh7e2gdgkcbd.apps.googleusercontent.com',
      callback: (response: any) => this.handleCredentialResponse(response)
    });

    google.accounts.id.renderButton(
      document.getElementById('google-signin-button'),
      { theme: 'outline', size: 'large' }  
    );

    google.accounts.id.prompt(); 
  }

  handleCredentialResponse(response: any) {
    if (response) {
      this.store.loginByGoogle(response.credential)
    }
  }
}
