import { FC } from 'react'
import { IconType } from 'react-icons'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<button
			onClick={onClick}
			className='tw-relative tw-w-10 tw-h-10 tw-bg-primary hover:tw-bg-primary/90 tw-rounded tw-flex tw-items-center tw-justify-center tw-transition-colors tw-duration-200'
		>
			{!!number && (
				<span className='tw-absolute tw-w-4 tw-h-4 tw-bg-white tw-flex tw-items-center tw-justify-center tw-rounded-full tw-p-0.5 tw-text-[0.75rem] tw-text-secondary -tw-top-1 -tw-right-1'>
					{number}
				</span>
			)}
			<Icon className='tw-text-secondary' size={21} />
		</button>
	)
}

export default SquareButton
