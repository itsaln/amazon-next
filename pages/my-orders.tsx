import { useQuery } from '@tanstack/react-query'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import { OrderService } from '@/services/order.service'

import { convertPrice } from '@/utils/index'

import Meta from '@/ui/meta/Meta'
import Layout from '@/ui/layout/Layout'
import Heading from '@/ui/heading/Heading'

const MyOrdersPage: NextPageAuth = () => {
	const { data: orders } = useQuery({
		queryKey: ['my orders'],
		queryFn: () => OrderService.getAll(),
		select: ({ data }) => data
	})

	return (
		<Meta title='My Orders'>
			<Layout>
				<Heading>My order</Heading>

				<section>
					{orders?.length ? (
						orders?.map((order, index) => (
							<div
								key={`${order.id}_${index}`}
								className='tw-bg-white tw-shadow tw-flex tw-gap-10 tw-p-7 tw-my-7'
							>
								<span>#{order.id}</span>
								<span>{order.status}</span>
								<span>{new Date(order.createdAt).toLocaleDateString()}</span>
								<span>{convertPrice(order.total)}</span>
							</div>
						))
					) : (
						<div>Orders not found!</div>
					)}
				</section>
			</Layout>
		</Meta>
	)
}

MyOrdersPage.isOnlyUser = true

export default MyOrdersPage
