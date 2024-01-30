import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'
import { Golos_Text } from 'next/font/google'

import { SITE_NAME } from '@/config/seo.constants'
import { getSiteUrl } from '@/config/url.config'

import Providers from '@/providers/Providers'

import Header from '@/app/layout/header/Header'
import Sidebar from '@/app/layout/sidebar/Sidebar'

import '@/assets/scss/globals.scss'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['itsaln23@gmail.com']
	}
}

const golos = Golos_Text({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en' className={golos.variable}>
			<body>
				<Providers>
					<div className='tw-bg-secondary'>
						<Header />
						<div
							className='tw-grid'
							style={{
								gridTemplateColumns: '0.8fr 4fr'
							}}
						>
							<Sidebar />
							<main className='tw-bg-bg-color tw-rounded-tl-lg tw-p-12'>
								{children}
							</main>
						</div>
					</div>
				</Providers>

				<div id='modal' />
			</body>
		</html>
	)
}
