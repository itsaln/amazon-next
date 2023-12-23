import { ICategory } from '@/types/category.interface'
import { IReview } from '@/types/review.interface'

export interface IProduct {
	id: number
	name: string
	slug: string
	description: string
	price: number
	images: string[]
	createdAt: Date | string
	category: ICategory
	reviews: IReview[]
}

export interface IProductDetails {
	product: IProduct
}
