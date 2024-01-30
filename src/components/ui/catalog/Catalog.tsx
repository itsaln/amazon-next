'use client'

import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader'

import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, isLoading, title }) => {
	if (isLoading) return <SkeletonLoader />

	return (
		<section>
			{title && <Heading className='tw-mb-5'>{title}</Heading>}

			{products.length ? (
				<div className='tw-grid tw-grid-cols-4 tw-gap-10'>
					{products.map((product, index) => (
						<ProductItem key={`${product.id}_${index}`} product={product} />
					))}
				</div>
			) : (
				<div>There are no products</div>
			)}
		</section>
	)
}

export default Catalog
