export interface IUser {
    email: string | null
    photoURL: string | null
    name: string | null
    uid: string
    emailVerified: boolean
}

export interface IUserInitialState {
    user: IUser | null
}