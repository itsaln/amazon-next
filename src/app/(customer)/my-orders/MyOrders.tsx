'use client'

import { useQuery } from '@tanstack/react-query'

import { OrderService } from '@/services/order.service'

import { convertPrice } from '@/utils/index'

import Heading from '@/ui/heading/Heading'

interface IMyOrders {}

export default function MyOrders({}: IMyOrders) {
	const { data: orders } = useQuery({
		queryKey: ['my orders'],
		queryFn: () => OrderService.getAll(),
		select: ({ data }) => data
	})

	return (
		<>
			<Heading>My order</Heading>

			<section>
				{orders?.length ? (
					orders?.map((order, index) => (
						<div
							key={`${order.id}_${index}`}
							className='tw-bg-white tw-rounded-lg tw-shadow tw-flex tw-gap-10 tw-p-7 tw-my-7'
						>
							<span>#{order.id}</span>
							<span>{order.status}</span>
							<span>
								{new Date(order.createdAt).toLocaleDateString('ru-RU')}
							</span>
							<span>{convertPrice(order.total)}</span>
						</div>
					))
				) : (
					<div>Orders not found!</div>
				)}
			</section>
		</>
	)
}
