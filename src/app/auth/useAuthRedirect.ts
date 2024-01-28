import { useRouter } from 'next/router' // TODO: next/navigation
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const { push, query } = useRouter()
	const redirect = query.redirect ? String(query.redirect) : '/'

	useEffect(() => {
		if (user) {
			let ignore = push(redirect)
		}
	}, [user, query, push, redirect])
}
