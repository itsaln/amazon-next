import instance from '@/api/api.interceptor'

import { IProduct, IProductDetails } from '@/types/product.interface'

import { PRODUCTS, TypeProductData, TypeProductDataFilters } from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		return instance.get<IProduct[]>(`/${PRODUCTS}`, {
			params: queryData
		})
	},

	async getSimilar(id: number | string) {
		return instance.get<IProduct[]>(`/${PRODUCTS}/similar/${id}`)
	},

	async getBySlug(slug: string) {
		return instance.get<IProduct>(`/${PRODUCTS}/by-slug/${slug}`)
	},

	async getByCategory(categorySlug: string) {
		return instance.get<IProduct>(`/${PRODUCTS}/by-category/${categorySlug}`)
	},

	async getById(id: number | string) {
		return instance.get<IProduct>(`/${PRODUCTS}/${id}`)
	},

	async create() {
		return instance.post<IProduct>(`/${PRODUCTS}`)
	},

	async update(id: number | string, data: TypeProductData) {
		return instance.put<IProduct>(`/${PRODUCTS}/${id}`, data)
	},

	async delete(id: number | string) {
		return instance.delete<IProduct>(`/${PRODUCTS}/${id}`)
	}
}
