import instance from '@/api/api.interceptor'

import { IReview } from '@/types/review.interface'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return instance.get<IReview[]>(`/${REVIEWS}`)
	},

	async leave(productId: number | string, data: TypeData) {
		return instance.post<IReview>(`/${REVIEWS}/leave/${productId}`, data)
	}
}
