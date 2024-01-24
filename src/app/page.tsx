import { Metadata } from 'next'

import { ProductService } from '@/services/product/product.service'

import Home from './Home'

export const metadata: Metadata = {
	description:
		'Free shipping on millions of items. Get the best of Shopping and Entertainment with Prime.'
}

export const revalidate = 60


async function getProducts() {
	return await ProductService.getAll({
		page: 1,
		perPage: 4,
		ratings: ''
	})
}

export default async function HomePage() {
	const data = await getProducts()

	return <Home products={data.products} length={data.length} />
}
