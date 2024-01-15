import { FC } from 'react'
import Image from 'next/image'

import { ICartItem } from '@/types/cart.interface'

import { convertPrice } from '@/utils/index'

import CartActions from './CartActions'

import styles from '../Cart.module.scss'

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.item}>
			<Image
				width={80}
				height={80}
				src={item.product.images[0]}
				alt={item.product.name}
			/>
			<div className='tw-grow'>
				<div className={styles.name} title={item.product.name}>
					{item.product.name}
				</div>
				<div className={styles.price}>{convertPrice(item.product.price)}</div>

				<CartActions item={item} />
			</div>
		</div>
	)
}

export default CartItem
