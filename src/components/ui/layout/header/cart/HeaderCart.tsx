import cn from 'clsx'
import { FC } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { RiShoppingCartLine } from 'react-icons/ri'

import { useOutside } from '@/hooks/useOutside'
import { useCart } from '@/hooks/useCart'
import { useActions } from '@/hooks/useActions'

import { OrderService } from '@/services/order.service'

import { convertPrice } from '@/utils/index'

import Button from '@/ui/button/Button'
import SquareButton from '@/ui/button/SquareButton'

import CartItem from './cart-item/CartItem'

import styles from './Cart.module.scss'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const { items, total } = useCart()
	const { push } = useRouter()
	const { reset } = useActions()

	const { mutate } = useMutation({
		mutationKey: ['create order and payment'],
		mutationFn: () =>
			OrderService.place({
				items: items.map((item) => ({
					price: item.price,
					quantity: item.quantity,
					productId: item.product.id
				}))
			}),
		onSuccess({ data }) {
			push(data.confirmation.confirmation_url).then(() => reset())
		}
	})

	return (
		<div className='tw-relative' ref={ref}>
			<SquareButton
				Icon={RiShoppingCartLine}
				onClick={() => setIsShow(!isShow)}
				number={items.length}
			/>

			<div
				className={cn(
					'menu tw-absolute tw-w-80 tw-bg-secondary tw-rounded-xl tw-text-sm tw-text-white tw-px-5 tw-py-3 tw-top-[4.2rem] -tw-left-[12.5rem] tw-z-2',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
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
				<div className='tw-text-center'>
					<Button
						variant='white'
						size='sm'
						className='btn-link tw-mt-5 tw-mb-2'
						onClick={() => mutate()}
					>
						Place order
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Cart
