import cn from 'clsx'
import { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { FiLogOut } from 'react-icons/fi'

import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'

import { CategoryService } from '@/services/category.service'

import SkeletonLoader from '@/ui/skeleton-loader'

const Sidebar: FC = () => {
	const { data, isLoading } = useQuery({
		queryKey: ['get categories'],
		queryFn: () => CategoryService.getAll(),
		select: ({ data }) => data
	})

	const { asPath } = useRouter()
	const { user } = useAuth()
	const { logout } = useActions()

	return (
		<aside
			className='tw-bg-secondary tw-flex tw-flex-col tw-justify-between'
			style={{
				height: 'calc(100vh - 88px)'
			}}
		>
			<div>
				{isLoading ? (
					<SkeletonLoader />
				) : data ? (
					<>
						<div className='tw-text-xl tw-text-white tw-mt-4 tw-ml-6 tw-mb-6'>
							Categories: 👇
						</div>
						<ul>
							{data.map((category, index) => (
								<li key={`${category.id}_${index}`}>
									<Link
										className={cn(
											'tw-block tw-text-lg hover:tw-text-primary tw-px-10 tw-my-3 tw-transition-colors tw-duration-200',
											asPath === `/category/${category.slug}`
												? 'tw-text-primary'
												: 'tw-text-white'
										)}
										href={`/category/${category.slug}`}
									>
										{category.name}
									</Link>
								</li>
							))}
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
