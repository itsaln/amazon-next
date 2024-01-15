import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

import styles from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: 'orange' | 'white'
	size?: 'sm' | 'md'
}

const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	variant,
	size = 'md',
	...rest
}) => {
	return (
		<button
			className={cn(
				styles.button,
				{
					[styles.orange]: variant === 'orange',
					[styles.white]: variant === 'white',
					[styles.small]: size === 'sm'
				},
				className
			)}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
