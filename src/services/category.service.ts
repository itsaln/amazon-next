import instance, { axiosClassic } from '@/api/api.interceptor'

import { ICategory } from '@/types/category.interface'

const CATEGORIES = 'categories'

export const CategoryService = {
	async getAll() {
		return axiosClassic.get<ICategory[]>(`/${CATEGORIES}`)
	},

	async getById(id: number | string) {
		return instance.get<ICategory>(`/${CATEGORIES}/${id}`)
	},

	async getBySlug(slug: string) {
		return axiosClassic.get<ICategory>(`/${CATEGORIES}/by-slug/${slug}`)
	},

	async create() {
		return instance.post<ICategory>(`/${CATEGORIES}`)
	},

	async update(id: number | string, data: Pick<ICategory, 'name'>) {
		return instance.put<ICategory>(`/${CATEGORIES}/${id}`, data)
	},

	async delete(id: number | string) {
		return instance.delete<ICategory>(`/${CATEGORIES}/${id}`)
	}
}
