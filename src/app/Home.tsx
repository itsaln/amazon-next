import { FC } from 'react'

import { IPaginationProduct } from '@/types/product.interface'

import Catalog from '@/ui/catalog/Catalog'

const Home: FC<IPaginationProduct> = ({ products, length }) => {
	return (
		<Catalog title='Freshed products' products={products} />
	)
}

export default Home
