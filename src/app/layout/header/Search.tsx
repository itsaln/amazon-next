import { FC, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FiSearch } from 'react-icons/fi'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')

	const { push } = useRouter()

	return (
		<div>
			<div
				className='tw-grid tw-w-1/2 tw-rounded-xl tw-border tw-border-solid tw-border-gray/10 tw-overflow-hidden'
				style={{
					gridTemplateColumns: '1fr 0.1fr'
				}}
			>
				<input
					className='tw-bg-[#22303E] tw-text-sm tw-text-white tw-py-2 tw-px-4 tw-outline-none'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					placeholder='Search...'
				/>
				<button
					onClick={() => push(`/explorer?searchTerm=${searchTerm}`)}
					className='tw-bg-primary tw-flex tw-items-center tw-justify-center tw-text-white tw-p-2.5'
				>
					<FiSearch />
				</button>
			</div>
		</div>
	)
}

export default Search
