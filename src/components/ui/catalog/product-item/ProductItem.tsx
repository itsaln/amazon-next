import { FC } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Image from 'next/image'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/index'

import AddToCartButton from './AddToCartButton'
import ProductRating from './ProductRating'

const DynamicFavoriteButton = dynamic(() => import('./FavoriteButton'), {
	ssr: false
})

const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className='tw-animate-scaleIn'>
			<div className='tw-relative tw-bg-white tw-rounded-xl tw-overflow-hidden'>
				<div className='tw-absolute tw-top-2 tw-right-3 tw-z-1'>
					<DynamicFavoriteButton productId={product.id} />
					<AddToCartButton product={product} />
				</div>
				<Link href={`/product/${product.slug}`}>
					<Image
						src={product.images[0]}
						alt={product.name}
						width={250}
						height={250}
					/>
				</Link>
			</div>
			<Link href={`/product/${product.slug}`}>
				<h3 className='tw-font-semibold tw-mt-2'>{product.name}</h3>
			</Link>
			<Link
				href={`/category/${product.category.slug}`}
				className='tw-text-aqua tw-text-sm tw-mb-2'
			>
				{product.category.name}
			</Link>
			<ProductRating product={product} />
			<div className='tw-font-semibold tw-text-xl'>
				{convertPrice(product.price)}
			</div>
		</div>
	)
}

export default ProductItem
