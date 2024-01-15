import { FC } from 'react'
import Image from 'next/image'

import { useProfile } from '@/hooks/useProfile'

const HeaderProfile: FC = () => {
	const { profile } = useProfile()

	return (
		<div>
			{profile?.avatarPath && (
				<Image
					width={43}
					height={43}
					src={profile.avatarPath}
					alt='Profile'
					className='tw-rounded-full tw-border tw-border-solid tw-border-b-primary tw-animate-opacity'
				/>
			)}
		</div>
	)
}

export default HeaderProfile
