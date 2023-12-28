import { forwardRef } from 'react'
import cn from 'clsx'

import { IField } from './field.interface'

import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>(
	(
		{ placeholder, error, className, type = 'text', style, Icon, ...rest },
		ref
	) => {
		return (
			<div className={cn(styles.field, className)} style={style}>
				<label>
					<span className={styles.label}>
						{Icon && <Icon className='tw-mr-3' />}
						{placeholder}
					</span>
					<input
						ref={ref}
						type={type}
						className={cn(styles.input, {
							[styles.error]: !!error
						})}
						{...rest}
					/>
				</label>
				{error && <div className={styles.error}>{error}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
