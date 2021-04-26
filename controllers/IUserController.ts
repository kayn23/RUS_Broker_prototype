import IToken from "../models/IToken";
import IUser from "../models/IUser";
import { TokenRefreshResponse, UserRequest, UserResponce } from "../types/UserRequestTypes";

interface IUserController {
    all(): IUser[]
    show(id: number): IUser[]
    create(params: UserRequest): UserResponce
    authorization(params: UserRequest): UserResponce
    refresh_token(params: TokenRefreshResponse): IToken
}

export default IUserController