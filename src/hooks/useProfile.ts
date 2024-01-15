import { useQuery } from '@tanstack/react-query'

import { useAuth } from '@/hooks/useAuth'

import { UserService } from '@/services/user.service'

export const useProfile = () => {
	const { user } = useAuth()

	const { data: profile } = useQuery({
		queryKey: ['get profile'],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		enabled: !!user
	})

	return { profile }
}
