import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineHeart } from 'react-icons/ai'

import SearchField from './search-field/SearchField'
import HeaderCart from './cart/HeaderCart'
import HeaderProfile from './HeaderProfile'

const Header: FC = () => {
	return (
		<header
			className='tw-bg-secondary tw-w-full tw-py-6 tw-px-6 tw-grid'
			style={{
				gridTemplateColumns: '1fr 3fr 1.2fr'
			}}
		>
			<Link href='/' className='tw-block tw-w-max'>
				<Image
					priority
					width={124}
					height={37}
					src='/images/logo.svg'
					alt='Amazon v2'
				/>
			</Link>
			<SearchField placeholder='Поиск...' containerClassName='tw-max-w-[500px]' />
			<div className='tw-flex tw-items-center tw-justify-end tw-gap-10'>
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
