import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  OnInit,
} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { LoginStore } from '../login/store/login.store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, IonButtons, IonIcon],
})
export class HeaderComponent implements OnInit {
  readonly loginStore = inject(LoginStore);
  readonly userFromSessiom = sessionStorage.getItem('NAME');
  private router = inject(Router);
  constructor() {
    addIcons({ personCircle });
    effect(() => {
      console.log('User data in header:', this.loginStore.user());
    });
  }

  ngOnInit() {
    console.log(this.loginStore.user());
  }
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
  goToProfile(): void {
    const userId =
      this.loginStore.user()?.userId || sessionStorage.getItem('USER');
    this.router.navigate(['/profile/' + userId]);
  }
}
