import { FC } from 'react'

import { IPaginationProduct } from '@/types/product.interface'

import Meta from '@/ui/meta/Meta'
import Layout from '@/ui/layout/Layout'
import CatalogPagination from '@/ui/catalog/CatalogPagination'

const Home: FC<IPaginationProduct> = ({ products, length }) => {
	return (
		<Meta title='Home'>
			<Layout>
				{/* Carousel	*/}

				<CatalogPagination
					data={{ products, length }}
					title='Freshed products'
				/>
			</Layout>
		</Meta>
	)
}

export default Home
