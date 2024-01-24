export const PRODUCTS = 'products'

export type TypeProductData = {
	name: string
	description?: string
	price: number
	images: string[]
	categoryId: number
}

export type TypeProductDataFilters = {
	sort?: EnumProductSort | string
	searchTerm?: string
	page?: number | string
	perPage?: number | string
	ratings?: number | string
	minPrice?: number | string
	maxPrice?: number | string
	categoryId?: number | string
}

export enum EnumProductSort {
	HIGH_PRICE = 'high-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest'
}
