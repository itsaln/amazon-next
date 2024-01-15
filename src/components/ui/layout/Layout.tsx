import { FC, PropsWithChildren } from 'react'

import Header from '@/ui/layout/header/Header'
import Sidebar from '@/ui/layout/sidebar/Sidebar'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
	    <div>
				<Header />
				<div className='tw-grid' style={{
					gridTemplateColumns: '1fr 4fr'
				}}>
					<Sidebar />
					<main className='tw-p-12'>{children}</main>
				</div>
			</div>
	)
}

export default Layout
