import Role from '../types/Role'

export default interface IUser {
    id: number
	email: string
	password: string
	role: Role
}