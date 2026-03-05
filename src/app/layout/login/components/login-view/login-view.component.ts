import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { LoginData } from '../../models/login-data';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss'],
  imports: [IonContent, IonInput, IonItem, IonList, IonButton, FormsModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginViewComponent {
  onLoginSubmit = output<{ email: string, password: string }>();
  onShowRegistration = output()
  loginForm: FormGroup;
  private readonly fb = inject(FormBuilder);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.onLoginSubmit.emit(this.loginForm.value);
    }
  }

}
