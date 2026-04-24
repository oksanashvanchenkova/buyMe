import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './layout/header/header.component';
import { isPlatform } from '@ionic/angular';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Capacitor } from '@capacitor/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, HeaderComponent],
})
export class AppComponent {
  constructor() { }
  ngOnInit() {
    // this.initializeGoogleAuth();
    // console.log(window.google);
  }


  private initializeGoogleAuth() {
    // Ініціалізуємо лише якщо це браузер (Web)
    if (Capacitor.getPlatform() === 'web') {
      GoogleAuth.initialize({
        clientId: '1094302961148-8vqebc8n688s4gop3kbgvh7e2gdgkcbd.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
        grantOfflineAccess: true, // для refresh_token
      });
      console.log('Google Auth initialized for Web');
    }
  }
}
