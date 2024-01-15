import instance, { axiosClassic } from '@/api/api.interceptor'

import { IReview } from '@/types/review.interface'

const REVIEWS = 'reviews'

type TypeData = {
	rating: number
	text: string
}

export const ReviewService = {
	async getAll() {
		return axiosClassic.get<IReview[]>(`/${REVIEWS}`)
	},

	async getAverageByProduct(productId: number | string) {
		return axiosClassic.get<Pick<IReview, 'rating'>>(
			`/${REVIEWS}/average-by-product/${productId}`
		)
	},

	async leave(productId: number | string, data: TypeData) {
		return instance.post<IReview>(`/${REVIEWS}/leave/${productId}`, data)
	}
}
