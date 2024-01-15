import { useProfile } from '@/hooks/useProfile'

import { NextPageAuth } from '@/providers/auth-provider/auth-page.types'

import Meta from '@/ui/meta/Meta'
import Layout from '@/ui/layout/Layout'
import Catalog from '@/ui/catalog/Catalog'

const FavoritesPage: NextPageAuth = () => {
	const { profile } = useProfile()

	return (
		<Meta title='Favorites'>
			<Layout>
				<Catalog products={profile?.favorites || []} title='Favorites' />
			</Layout>
		</Meta>
	)
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage
