export interface ICredentials {
    email: string
    password: string
}

export interface IUserData {
    token: string,
    user_id: number,
    role: string
}
export interface IUserRegistration {
    firstName: string,
    lastName: string,
    phoneNumber: string,
    email: string,
    password: string,
    confirmPassword: string
}