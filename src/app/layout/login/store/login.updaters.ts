import { PartialStateUpdater } from "@ngrx/signals";
import { LoginSlice } from "./login.slice";
import { IUserTokenData } from "../models/user.data.model";

export function setPending(isPending: boolean): PartialStateUpdater<LoginSlice> {
    return _ => ({ isPending });
}

export function setLoginSuccess(token: string, user: IUserTokenData): PartialStateUpdater<LoginSlice> {
    return _ => ({
        token,
        user,
        isLogin: true,
        isPending: false,
        timeStamp: new Date().toISOString(),
        showRegistr:false
    });
}

export function setLoginError(): PartialStateUpdater<LoginSlice> {
    return _ => ({ isPending: false, isLogin: false });
}
export function setRegistrationSuccess(): PartialStateUpdater<LoginSlice> {
    return _ => ({ isPending: false });
}
export function setShowRegistration(show: boolean): PartialStateUpdater<LoginSlice> {
    return _ => ({ showRegistr: show });
}