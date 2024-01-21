import instance from '@/api/api.interceptor'

import { IOrder, IPaymentData } from '@/types/order.interface'

const ORDERS = 'orders'

export const OrderService = {
	async getAll() {
		return instance.get<IOrder[]>(`/${ORDERS}`)
	},

	async place(data: IPaymentData) {
		return instance.post<{ confirmation: { confirmation_url: string } }>(
			`/${ORDERS}`,
			data
		)
	}
}
