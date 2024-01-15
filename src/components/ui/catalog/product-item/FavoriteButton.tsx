import { FC } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import { useProfile } from '@/hooks/useProfile'

import { UserService } from '@/services/user.service'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
	const { profile } = useProfile()

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['toggle favorite'],
		mutationFn: () => UserService.toggleFavorite(productId),
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['get profile']
			})
		}
	})

	if (!profile) return null

	const isExists = profile.favorites.some(
		(favorite) => favorite.id === productId
	)

	return (
		<div>
			<button onClick={() => mutate()} className='tw-text-primary'>
				{isExists ? <AiFillHeart /> : <AiOutlineHeart />}
			</button>
		</div>
	)
}

export default FavoriteButton
