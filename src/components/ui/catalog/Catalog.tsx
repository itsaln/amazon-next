'use client'

import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import Heading from '@/ui/heading/Heading'

import ProductItem from './product-item/ProductItem'

interface ICatalog {
	products: IProduct[]
	title?: string
}

const Catalog: FC<ICatalog> = ({ products, title }) => {
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
