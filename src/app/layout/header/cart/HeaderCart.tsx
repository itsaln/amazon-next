'use client'

// import cn from 'clsx'
import { FC } from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import { useMutation } from '@tanstack/react-query'
import { RiShoppingCartLine } from 'react-icons/ri'

import { useOutside } from '@/hooks/useOutside'
import { useCart } from '@/hooks/useCart'
// import { useActions } from '@/hooks/useActions'

// import { OrderService } from '@/services/order.service'

import { convertPrice } from '@/utils/index'

// import Button from '@/ui/button/Button'
import SquareButton from '@/ui/button/SquareButton'

import CartItem from './cart-item/CartItem'

import styles from './Cart.module.scss'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { items, total } = useCart()
	// const { push } = useRouter()
	// const { reset } = useActions()

	// const { mutate } = useMutation({
	// 	mutationKey: ['create order and payment'],
	// 	mutationFn: () =>
	// 		OrderService.place({
	// 			items: items.map((item) => ({
	// 				price: item.price,
	// 				quantity: item.quantity,
	// 				productId: item.product.id
	// 			}))
	// 		}),
	// 	onSuccess({ data }) {
	// 		reset()
	// 		push(data.confirmation.confirmation_url)
	// 	}
	// })

	return (
		<div className='tw-relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => setIsShow(!isShow)}
				number={items.length}
			/>

			{isShow && (
				<div className={styles.cartWrapper}>
					<div className='tw-font-normal tw-text-lg tw-mb-5'>My cart</div>

					<div className={styles.cart}>
						{items.length ? (
							items.map((item, index) => (
								<CartItem key={`${item.id}_${index}`} item={item} />
							))
						) : (
							<div className='tw-font-light'>Cart is empty!</div>
						)}
					</div>

					<div className={styles.footer}>
						<div className='tw-text-sm'>Total:</div>
						<div className='tw-font-semibold tw-text-lg'>
							{convertPrice(total)}
						</div>
					</div>

					{!!items.length && (
						<div className='tw-text-center tw-mt-7 tw-mb-5'>
							<Link href='/checkout' className='btn btn-white'>
								Go to checkout
							</Link>
						</div>
					)}
				</div>
			)}
		</div>
	)
}

export default Cart
