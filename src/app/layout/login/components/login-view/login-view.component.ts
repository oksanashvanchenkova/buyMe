import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonInput, IonItem, IonList, IonButton, IonIcon } from '@ionic/angular/standalone';
import { LoginStore } from '../../store/login.store';
import { ICredentials } from 'src/app/core/interfaces/auth.interfaces';
import { addIcons } from 'ionicons';
import { logoGoogle } from 'ionicons/icons';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
  imports: [IonContent, IonInput, IonItem, IonList, IonButton, FormsModule, ReactiveFormsModule, IonIcon],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginViewComponent {
  loginForm: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(LoginStore);
  onShowRegistration=output()

  constructor() {
    addIcons({ 'logo-google': logoGoogle });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.store.loginByCredentials(this.loginForm.value as ICredentials);
    }
  }
  handleGoogleLogin() {
    this.store.loginByGoogle()
  }
}
