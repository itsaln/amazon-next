import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/config/seo.constants'

import Layout from '@/ui/layout/Layout'
import Heading from '@/ui/heading/Heading'

export const metadata: Metadata = {
	title: 'Thanks',
	...NO_INDEX_PAGE
}

export default function ThanksPage() {
	return (
		<Layout>
			<Heading>Thanks!</Heading>
		</Layout>
	)
}
