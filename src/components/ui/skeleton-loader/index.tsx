import cn from 'clsx'
import { FC } from 'react'
import Skeleton, { SkeletonProps } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({
	className,
	containerClassName,
	...rest
}) => {
	return (
		<Skeleton
			{...rest}
			// baseColor={skin === 'dark' ? '#202020' : ''}
			// highlightColor={skin === 'dark' ? '#444' : ''}
			className={cn('tw-rounded-lg', className)}
			containerClassName={cn('tw-flex tw-h-full', containerClassName)}
		/>
	)
}

export default SkeletonLoader
