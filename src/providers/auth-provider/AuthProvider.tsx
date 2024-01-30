import { FC, PropsWithChildren, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { ADMIN_PANEL_URL } from '@/config/url.config'

import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'

import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'

import NotFound from '@/app/not-found'

import { protectedRoutes } from './protected-routes.data'

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const { user } = useAuth()
	const { checkAuth, logout } = useActions()

	const { replace } = useRouter()
	const pathname = usePathname()

	const isProtectedRoute = protectedRoutes.some(
		(route) => pathname?.startsWith(route)
	)
	const isAdminRoute = pathname?.startsWith(ADMIN_PANEL_URL)

	useEffect(() => {
		const accessToken = getAccessToken()

		if (accessToken) checkAuth()
	}, [checkAuth])

	useEffect(() => {
		const refreshToken = getRefreshToken()

		if (!refreshToken && user) logout()
	}, [pathname, logout, user])

	if (!isProtectedRoute && !isAdminRoute) return <>{children}</>

	if (user?.isAdmin) return <>{children}</>
	if (user && isProtectedRoute) return <>{children}</>

	if (user && isAdminRoute) return <NotFound />

	pathname !== '/auth' && replace('/auth')
	return null
}

export default AuthProvider
