import { IUserTokenData } from "../models/user.data.model";

export interface LoginSlice {
    readonly user: IUserTokenData | null;
    readonly isLogin: boolean;
    readonly isPending: boolean;
    readonly token: string;
    readonly timeStamp: string;
    readonly showRegistr: boolean

}
export const initialLoginSlice: LoginSlice = {
    user: null,
    isLogin: false,
    isPending: false,
    token: '',
    timeStamp: new Date().toISOString(),
    showRegistr: false
}