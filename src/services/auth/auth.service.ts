import Cookies from 'js-cookie'

import { axiosClassic } from '@/api/api.interceptor'

import { REFRESH_TOKEN } from '@/config/token.constants'

import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface'

import { saveToStorage } from '@/services/auth/auth.helper'

const AUTH = 'auth'

export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await axiosClassic.post(`/${AUTH}/${type}`, data)

		if (response.data.accessToken) saveToStorage(response.data)

		return response.data
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(REFRESH_TOKEN)

		const response = await axiosClassic.post<string, { data: IAuthResponse }>(
			`/${AUTH}/login/access-token`,
			{ refreshToken }
		)

		if (response.data.accessToken) saveToStorage(response.data)

		return response
	}
}
