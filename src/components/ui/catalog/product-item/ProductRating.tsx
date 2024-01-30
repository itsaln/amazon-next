import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProduct } from '@/types/product.interface'

interface IProductRating {
	product: IProduct
	isText?: boolean
}

const ProductRating: FC<IProductRating> = ({ product, isText = false }) => {
	const [rating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className='tw-inline-flex tw-items-center tw-mb-2'>
			{!!product.reviews.length && (
				<span className='tw-mr-1'>
					<Rating
						readonly
						initialValue={rating}
						SVGstyle={{
							display: 'inline-block',
							minWidth: 20,
							minHeight: 20
						}}
						size={20}
						allowFraction
						transition
						className='tw-inline-flex'
						emptyClassName='tw-inline-flex'
						fillClassName='tw-inline-flex'
					/>
					<span className='tw-text-sm tw-text-[#FFBC0D] tw-ml-1'>{rating}</span>
				</span>
			)}

			{isText && (
				<span className='tw-text-xs'>({product.reviews.length} reviews)</span>
			)}
		</div>
	)
}

export default ProductRating
