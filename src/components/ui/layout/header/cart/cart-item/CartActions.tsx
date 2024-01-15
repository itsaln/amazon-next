import { FC } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

import { useCart } from '@/hooks/useCart'
import { useActions } from '@/hooks/useActions'

import { ICartItem } from '@/types/cart.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()
	const { items } = useCart()

	const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity

	return (
		<div className='tw-mt-3'>
			<div className='tw-flex tw-items-center tw-gap-3'>
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<FiMinus size={13} />
				</button>

				<input
					disabled
					readOnly
					value={quantity}
					className='tw-w-10 tw-bg-black tw-text-center'
				/>

				<button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
					<FiPlus size={13} />
				</button>

				<button
					onClick={() => removeFromCart({ id: item.id })}
					className='tw-text-white hover:tw-text-red tw-ml-3 tw-transition-colors tw-duration-200'
				>
					<FiTrash />
				</button>
			</div>
		</div>
	)
}

export default CartActions
