import { ChangeDetectionStrategy, Component, inject, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonInput, IonItem, IonList, IonButton } from '@ionic/angular/standalone';
import { IUserRegistration } from 'src/app/core/interfaces/auth.interfaces';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.scss'],
  imports: [IonInput, IonItem, IonList, ReactiveFormsModule, IonButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationViewComponent {
  registrationForm = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    phone_number: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
  })
  onSubmitRegistrationData = output<IUserRegistration>()
  ngOnInit() {
    this.registrationForm.valueChanges.subscribe(console.log)
  }
  registrationSubmit() {
    const data = this.registrationForm.value as IUserRegistration
    this.onSubmitRegistrationData.emit(data)
  }
}
