import { FC, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { EnumProductSort } from '@/services/product/product.types'
import { ProductService } from '@/services/product/product.service'

import { IPaginationProduct } from '@/types/product.interface'

import Heading from '@/ui/heading/Heading'
import Button from '@/ui/button/Button'
import SortDropdown from '@/ui/catalog/SortDropdown'

import ProductItem from './product-item/ProductItem'

interface ICatalogPagination {
	data: IPaginationProduct
	title?: string
}

const CatalogPagination: FC<ICatalogPagination> = ({ data, title }) => {
	const [page, setPage] = useState(1)
	const [sortType, setSortType] = useState<EnumProductSort>(
		EnumProductSort.NEWEST
	)

	const { data: response, isLoading } = useQuery({
		queryKey: ['products', sortType, page],
		queryFn: () =>
			ProductService.getAll({
				page,
				perPage: 4,
				sort: sortType
			}),
		initialData: data
	})

	return (
		<section>
			{title && <Heading>{title}</Heading>}

			<SortDropdown sortType={sortType} setSortType={setSortType} />

			{response?.products.length ? (
				<>
					<div className='tw-grid tw-grid-cols-4 tw-gap-10'>
						{response.products.map((product, index) => (
							<ProductItem key={`${product.id}_${index}`} product={product} />
						))}
					</div>

					<div className='tw-text-center tw-mt-16'>
						{Array.from({ length: response.length / 4 }).map((_, index) => (
							<Button
								key={`${index + 1}_${index}`}
								size='sm'
								variant={page === index + 1 ? 'orange' : 'white'}
								onClick={() => setPage(index + 1)}
								className='tw-mx-3'
							>
								{index + 1}
							</Button>
						))}
					</div>
				</>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default CatalogPagination
