import { ChangeDetectionStrategy, Component, inject, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { IUserRegistration } from 'src/app/core/interfaces/auth.interfaces';
import { LoginStore } from '../../store/login.store';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.scss'],
  imports: [IonInput, IonItem, IonList, ReactiveFormsModule, IonButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationViewComponent {
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })

  private readonly store = inject(LoginStore)
  ngOnInit() {
    this.store.logout()
    this.registrationForm.valueChanges.subscribe(console.log)
  }
  registrationSubmit() {
    const data = this.registrationForm.value as IUserRegistration;
    this.store.registerUser(data)
  }
}
