// auth.methods.ts

import { rxMethod } from '@ngrx/signals/rxjs-interop';
import {  switchMap, tap, catchError } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import { patchState } from '@ngrx/signals';

export const authMethods = (store: any, authService: any, tokenService: any) => ({

  login: rxMethod<{email:string,password:string}>(
    pipe(

      tap(() =>
        patchState(store,{loading:true})
      ),

      switchMap(credentials =>
        authService.loginByCredentials(credentials).pipe(

          tap((res:any)=>{

            tokenService.setTokens(
              res.token,
              res?.refreshToken
            );

            patchState(store,{
              user:res.user_id,
              authenticated:true
            });

          }),

          catchError(()=>{

            patchState(store,{
              error:'Login failed'
            });

            return of(null);

          })
        )
      )

    )
  )

});