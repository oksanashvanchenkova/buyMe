import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withProps, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap, catchError, of, exhaustMap } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { initialLoginSlice } from './login.slice';
import { ICredentials, IUserRegistration } from 'src/app/core/interfaces/auth.interfaces';
import { AuthService } from 'src/app/core/auth/services/auth-service';
import { IUserTokenData } from '../models/user.data.model';
import { Router } from '@angular/router';
import { setLoginError, setLoginSuccess, setPending, setRegistrationSuccess } from './login.updaters';

export const LoginStore = signalStore(
    { providedIn: 'root' },
    withState(initialLoginSlice),
    withProps(() => ({
        _authService: inject(AuthService),
        _router: inject(Router),
    })),
    withMethods((store) => ({
        loginByCredentials: rxMethod<ICredentials>(
            pipe(
                tap(() => patchState(store, setPending(true))),

                exhaustMap((credentials) =>
                    store._authService.loginByCredentials(credentials).pipe(
                        tap((response) => {
                            const token = response.accessToken;
                            const decodedUser = jwtDecode<IUserTokenData>(token);

                            sessionStorage.setItem('accessToken', token);

                            patchState(store, setLoginSuccess(token, decodedUser));
                            store._router.navigate(['/home']);
                        }),
                        catchError((error) => {
                            patchState(store, setLoginError());
                            return of(error);
                        })
                    )
                )
            )
        ),

        logout() {
            sessionStorage.removeItem('accessToken');
            patchState(store, initialLoginSlice);
            store._router.navigate(['/login']);
        },
        openRegistration(show: boolean) {
            patchState(store, (state) => ({
                ...state,
                showRegistr: show
            }));
        },
        registerUser: rxMethod<IUserRegistration>(
            pipe(
                tap(() => patchState(store, setPending(true))),
                exhaustMap((regData) =>
                    store._authService.userRegistration(regData).pipe(
                        tap((response) => {
                            console.log('User registered:', response.message);
                            patchState(store, setRegistrationSuccess());
                        }),
                        catchError((error) => {
                            console.error('Registration failed', error);
                            patchState(store, setLoginError());
                            return of(error);
                        })
                    )
                )
            )
        ),
    }
    )
    )
)