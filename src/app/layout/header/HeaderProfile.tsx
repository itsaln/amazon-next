'use client'

import { FC } from 'react'
import Image from 'next/image'

import { useProfile } from '@/hooks/useProfile'
import { useOutside } from '@/hooks/useOutside'
import Link from 'next/link'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()
	const { isShow, setIsShow, ref } = useOutside(false)

	if (!profile?.avatarPath) return null

	return (
		<div className='tw-relative' ref={ref}>
			<button onClick={() => setIsShow(!isShow)}>
				<Image
					width={43}
					height={43}
					src={profile.avatarPath}
					alt='Profile'
					className='tw-rounded-full tw-border tw-border-solid tw-border-b-primary tw-animate-opacity'
				/>

				{isShow && (
					<div
						className='tw-absolute tw-w-40 tw-right-2 tw-z-20'
						style={{
							top: 'calc(100% + 1rem)'
						}}
					>
						<Link
							href='/my-orders'
							className='tw-block tw-w-full tw-bg-white tw-rounded-md tw-shadow hover:tw-text-primary tw-py-2 tw-px-4 tw-duration-300 tw-transition-colors'
						>
							My orders
						</Link>
					</div>
				)}
			</button>
		</div>
	)
}

export default HeaderProfile
