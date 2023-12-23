import { IUser } from '@/types/user.interface'

export interface IReview {
	id: number
	user: IUser
	text: string
	rating: number
	createdAt: Date | string
}
