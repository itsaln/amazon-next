import Cookies from 'js-cookie'

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/config/token.constants'

import { IAuthResponse, ITokens } from '@/store/user/user.interface'

export const getAccessToken = () => {
	const accessToken = Cookies.get(ACCESS_TOKEN)
	return accessToken || null
}

export const getRefreshToken = () => {
	const refreshToken = Cookies.get(REFRESH_TOKEN)
	return refreshToken || null
}

export const saveTokensStorage = (data: ITokens) => {
	Cookies.set(ACCESS_TOKEN, data.accessToken)
	Cookies.set(REFRESH_TOKEN, data.refreshToken)
}

export const removeFromStorage = () => {
	Cookies.remove(ACCESS_TOKEN)
	Cookies.remove(REFRESH_TOKEN)
	localStorage.removeItem('user')
}

export const saveToStorage = (data: IAuthResponse) => {
	saveTokensStorage(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}
