import Link from 'next/link'

import Heading from '@/ui/heading/Heading'

export default function NotFound() {
	return (
		<>
			<Heading>Not Found</Heading>
			<p>Could not found requested resource</p>
			<p>
				View{' '}
				<Link href='/explorer' className='tw-text-primary'>
					all products
				</Link>
			</p>
		</>
	)
}
