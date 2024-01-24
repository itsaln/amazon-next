import instance, { axiosClassic } from '@/api/api.interceptor'

import { IPaginationProduct, IProduct } from '@/types/product.interface'

import {
	PRODUCTS,
	TypeProductData,
	TypeProductDataFilters
} from './product.types'

export const ProductService = {
	async getAll(queryData = {} as TypeProductDataFilters) {
		const { data } = await axiosClassic.get<IPaginationProduct>(
			`/${PRODUCTS}`,
			{
				params: queryData
			}
		)

		return data
	},

	async getSimilar(id: number | string) {
		return axiosClassic.get<IProduct[]>(`/${PRODUCTS}/similar/${id}`)
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<IProduct>(`/${PRODUCTS}/by-slug/${slug}`)
	},

	async getByCategory(categorySlug: string) {
		return axiosClassic.get<IProduct[]>(
			`/${PRODUCTS}/by-category/${categorySlug}`
		)
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
