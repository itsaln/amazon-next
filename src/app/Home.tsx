'use client'

import { FC } from 'react'

import { IPaginationProduct } from '@/types/product.interface'

import Layout from '@/ui/layout/Layout'
import CatalogPagination from '@/ui/catalog/CatalogPagination'

const Home: FC<IPaginationProduct> = ({ products, length }) => {
	return (
		<Layout>
			{/* Carousel	*/}

			<CatalogPagination data={{ products, length }} title='Freshed products' />
		</Layout>
	)
}

export default Home
