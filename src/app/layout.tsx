import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import { SITE_NAME } from '@/config/seo.constants'
import { getSiteUrl } from '@/config/url.config'

import Providers from '@/providers/Providers'

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

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en'>
			<body>
				<Providers>{children}</Providers>
				<div id='modal' />
			</body>
		</html>
	)
}
