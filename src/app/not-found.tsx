import Link from 'next/link'

import Layout from '@/ui/layout/Layout'
import Heading from '@/ui/heading/Heading'

export default function NotFound() {
	return (
		<Layout>
			<Heading>Not Found</Heading>
			<p>Could not found requested resource</p>
			<p>
				View{' '}
				<Link href='/explorer' className='tw-text-primary'>
					all products
				</Link>
			</p>
		</Layout>
	)
}
