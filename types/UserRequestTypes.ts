import IToken from '../models/IToken'
import IUser from '../models/IUser'

export type UserRequest = { email: string, password: string }
export type UserResponce = { user: IUser, token: IToken }
export type TokenRefreshResponse = { refresh_token: string }