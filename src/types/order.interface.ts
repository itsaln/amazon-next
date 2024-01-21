import { ICartItem } from '@/types/cart.interface'
import { IUser } from '@/types/user.interface'

export enum EnumOrderStatus {
	PENDING = 'PENDING',
	PAYED = 'PAYED',
	SHIPPED = 'SHIPPED',
	DELIVERED = 'DELIVERED'
}

export interface IOrder {
	id: number
	status: EnumOrderStatus
	items: ICartItem[]
	user: IUser
	total: number
	createdAt: Date | string
}

export interface IPaymentData {
	status?: EnumOrderStatus
	items: {
		price: number
		quantity: number
		productId: number
	}[]
}
