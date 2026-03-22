import { inject } from '@angular/core';
import { signalStore, withState, withMethods, withComputed } from '@ngrx/signals';

import { initialAuthSlice } from './auth.slice';
import { authMethods } from './auth.methods';
import { authComputed } from './auth.computed';

import { AuthService } from '../services/auth-service';
import { TokenService } from '../services/token-service';

export const AuthStore = signalStore(
  { providedIn: 'root' },

  withState(initialAuthSlice),

  withComputed((store)=>authComputed(store)),

  withMethods((store)=>{

    const authService = inject(AuthService);
    const tokenService = inject(TokenService);

    return authMethods(store,authService,tokenService);
  })
);