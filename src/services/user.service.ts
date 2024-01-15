import instance from '@/api/api.interceptor'

import { IFullUser, IUser } from '@/types/user.interface'

const USERS = 'users'

type TypeData = {
	email: string
	password?: string
	name?: string
	avatarPath?: string
	phone?: string
}

export const UserService = {
	async getProfile() {
		return instance.get<IFullUser>(`/${USERS}/profile`)
	},

	async updateProfile(data: TypeData) {
		return instance.put<IUser>(`/${USERS}/profile`, data)
	},

	async toggleFavorite(productId: number | string) {
		return instance.patch<IUser>(`/${USERS}/profile/favorites/${productId}`)
	}
}
