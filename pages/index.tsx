import { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'

import { ProductService } from '@/services/product/product.service'

import { IPaginationProduct } from '@/types/product.interface'

const HomePage: NextPage<IPaginationProduct> = ({ products, length }) => {
	return <Home products={products} length={length} />
}

export const getStaticProps: GetStaticProps<IPaginationProduct> = async () => {
	const data = await ProductService.getAll({
		page: 1,
		perPage: 4
	})

	return {
		props: data
	}
}

export default HomePage
