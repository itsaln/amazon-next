import { NextPage } from 'next'
import { useRouter } from 'next/router'

import Meta from '@/ui/meta/Meta'
import Layout from '@/ui/layout/Layout'
import Catalog from '@/ui/catalog/Catalog'
import { useQuery } from '@tanstack/react-query'
import { ProductService } from '@/services/product/product.service'

const SearchPage: NextPage = () => {
	const { query } = useRouter()

	const { data } = useQuery({
		queryKey: ['search products', query.term],
		queryFn: () =>
			ProductService.getAll({
				searchTerm: query.term as string
			})
	})

	return (
		<Meta title='Поиск'>
			<Layout>
				<Catalog
					products={data?.products || []}
					title={`Поиск по запросу: ${query.term || ''}`}
				/>
			</Layout>
		</Meta>
	)
}

export default SearchPage
