'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useAuth } from '@/hooks/useAuth'

import Search from './Search'
import HeaderCart from './cart/HeaderCart'
import HeaderProfile from './HeaderProfile'

const Header: FC = () => {
	const { isAdminPanel } = useIsAdminPanel()
	const { user } = useAuth()

	return (
		<header
			className='tw-bg-secondary tw-w-full tw-py-6 tw-px-6 tw-grid'
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link href='/next/public' className='tw-block tw-w-max'>
				{isAdminPanel ? (
					<h2 className='tw-font-semibold tw-text-3xl tw-text-white'>
						Admin Panel
					</h2>
				) : (
					<Image
						priority
						width={124}
						height={37}
						src='/images/logo.svg'
						alt='Amazon v2'
					/>
				)}
			</Link>
			<Search />
			<div className='tw-flex tw-items-center tw-justify-end tw-gap-10'>
				{user?.isAdmin && !isAdminPanel && (
					<Link
						href='/admin'
						className='tw-inline-block tw-text-lg tw-text-white hover:tw-text-primary tw-transition-colors tw-duration-200'
					>
						<MdOutlineAdminPanelSettings size={28} />
					</Link>
				)}

				<Link href='/favorites' className='tw-text-white'>
					<AiOutlineHeart size={28} />
				</Link>
				<HeaderCart />
				<HeaderProfile />
			</div>
		</header>
	)
}

export default Header
