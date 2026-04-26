import { ChangeDetectionStrategy, Component, EnvironmentInjector, inject, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { IonTabs, IonTabBar, IonTabButton, } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square } from 'ionicons/icons';
import { LoginStore } from '../login/store/login.store';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);
  private readonly router = inject(Router);
  private readonly loginStore=inject(LoginStore)
  constructor() {
    addIcons({ triangle, ellipse, square });
  }
  handleTabClick(event: any) {

    const user = this.loginStore.user();
    console.log(user)
    if (user) {
      console.log(event)
      this.router.navigate(['/add'])
    } else {
      console.log(event)
      this.router.navigate(['/login'])
    }
  }
}
