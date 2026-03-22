import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { LoginStore } from '../../store/login.store';
import { ICredentials } from 'src/app/core/interfaces/auth.interfaces';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
  imports: [IonContent, IonInput, IonItem, IonList, IonButton, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginViewComponent {
  loginForm: FormGroup;
  private readonly fb = inject(FormBuilder);
  private readonly store = inject(LoginStore)

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  showRegistration() {
    this.store.openRegistration(true);
    console.log('kbkj')
  }
  login() {
    if (this.loginForm.valid) {
      this.store.loginByCredentials(this.loginForm.value as ICredentials);
    }
  }
}
