import instance from '@/api/api.interceptor'

import { IOrder } from '@/types/order.interface'

const ORDERS = 'orders'

export const OrderService = {
	async getAll() {
		return instance.get<IOrder[]>(`/${ORDERS}`)
	}
}
