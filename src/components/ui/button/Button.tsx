import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

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
				'btn',
				{
					'btn-orange': variant === 'orange',
					'btn-white': variant === 'white',
					'btn-sm': size === 'sm'
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
