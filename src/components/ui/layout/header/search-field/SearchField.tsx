import cn from 'clsx'
import { forwardRef, InputHTMLAttributes, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FieldError } from 'react-hook-form'
import { FiSearch } from 'react-icons/fi'

import styles from './SearchField.module.scss'

interface ISearchProps {
	containerClassName?: string
	error?: FieldError
	isLoading?: boolean
}

type TypeSearchPropsField = InputHTMLAttributes<HTMLInputElement> & ISearchProps

interface ISearchField extends TypeSearchPropsField {}

const SearchField = forwardRef<HTMLInputElement, ISearchField>(
	(
		{
			type = 'text',
			placeholder,
			error,
			containerClassName,
			className,
			...rest
		},
		ref
	) => {
		const { push } = useRouter()

		const [value, setValue] = useState('')

		return (
			<div className={cn(styles.search, containerClassName)}>
				<label className={styles.label}>
					<input
						ref={ref}
						type={type}
						value={value}
						placeholder={!!error ? error.message : placeholder}
						className={cn(styles.input, className, {
							[styles.invalid]: !!error
						})}
						onChange={(e) => setValue(e.target.value)}
						{...rest}
					/>

					<button
						type='button'
						className={styles.button}
						onClick={() => push(`/q?term=${value}`)}
					>
						<FiSearch size={20} />
					</button>
				</label>

				{/*{error && <div className={styles.error}>{error.message}</div>}*/}
			</div>
		)
	}
)

SearchField.displayName = 'SearchField'

export default SearchField
