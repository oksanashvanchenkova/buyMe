import { inject, Injectable } from '@angular/core';
import { Auth } from 'src/app/core/auth/auth';
import { ILoginDataDto, IUserRegistration } from 'src/app/core/interfaces/auth.interfaces';

@Injectable()
export class Login {
  private readonly auth=inject(Auth)
  registreteUser(data: IUserRegistration){
    this.auth.userRegistration(data).subscribe(console.log)
  }

  login(data:ILoginDataDto){

  }
}
