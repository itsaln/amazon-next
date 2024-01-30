'use client'

import cn from 'clsx'
import { FC } from 'react'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'

import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'
import { useCategories } from '@/hooks/queries/useCategories'

import SkeletonLoader from '@/ui/skeleton-loader'
import { ADMIN_MENU } from '@/app/layout/sidebar/admin-menu.data'
import { convertToMenuItems } from '@/app/layout/sidebar/convert-to-menu-items'
import { iterate } from 'glob'

const Sidebar: FC = () => {
	const { data, isLoading } = useCategories()

	const { user } = useAuth()
	const { logout } = useActions()
	const { isAdminPanel, pathname } = useIsAdminPanel()

	return (
		<aside
			className='tw-bg-secondary tw-flex tw-flex-col tw-justify-between tw-z-10'
			style={{
				minHeight: 'calc(100vh - 88px)',
				height: 'calc(100vh - 88px)'
			}}
		>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : data ? (
					<>
						<div className='tw-text-xl tw-text-white tw-mt-4 tw-ml-6 tw-mb-6'>
							{isAdminPanel ? 'Menu' : 'Categories'}: 👇
						</div>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
								(category, index) => (
									<li key={`${category.href}_${index}`}>
										<Link
											className={cn(
												'tw-block tw-text-lg hover:tw-text-primary tw-px-10 tw-my-3 tw-transition-colors tw-duration-200',
												pathname === category.href
													? 'tw-text-primary'
													: 'tw-text-white'
											)}
											href={category.href}
										>
											{category.label}
										</Link>
									</li>
								)
							)}
						</ul>
					</>
				) : (
					<div>Categories not found!</div>
				)}
			</div>

			{!!user && (
				<button
					className='tw-flex tw-items-center tw-text-white tw-ml-10 tw-mb-10'
					onClick={() => logout()}
				>
					<FiLogOut />
					<span className='tw-ml-2'>Logout</span>
				</button>
			)}
		</aside>
	)
}

export default Sidebar
