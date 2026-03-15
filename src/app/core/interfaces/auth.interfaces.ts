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
    first_name: string,
    last_name: string,
    username: string,
    phone_number: string,
    email: string,
    password: string,
    confirm_password: string
}