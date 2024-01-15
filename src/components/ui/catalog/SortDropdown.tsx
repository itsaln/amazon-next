import { Dispatch, FC, SetStateAction } from 'react'

import { EnumProductSort } from '@/services/product/product.types'

interface ISortDropdown {
	sortType: EnumProductSort
	setSortType: Dispatch<SetStateAction<EnumProductSort>>
}

const SortDropdown: FC<ISortDropdown> = ({ sortType, setSortType }) => {
	return (
		<div className='tw-text-right tw-mb-5'>
			<select
				className='tw-bg-white tw-rounded-xl tw-border tw-border-gray tw-outline-0 tw-appearance-none tw-py-1 tw-px-2'
				onChange={(e) => setSortType(e.target.value as any)}
				value={sortType}
			>
				{(
					Object.keys(EnumProductSort) as Array<keyof typeof EnumProductSort>
				).map((key, index) => {
					return (
						<option key={`${key}_${index}`} value={EnumProductSort[key]}>
							{EnumProductSort[key]}
						</option>
					)
				})}
			</select>
		</div>
	)
}

export default SortDropdown
