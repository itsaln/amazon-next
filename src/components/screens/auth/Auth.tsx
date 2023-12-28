import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'

import { IEmailPassword } from '@/store/user/user.interface'

import { validEmail } from '@/shared/regex'

import Meta from '@/ui/meta/Meta'
import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import Field from '@/ui/field/Field'

import styles from './Auth.module.scss'
import SkeletonLoader from '@/ui/skeleton-loader'

const Auth: FC = () => {
	const { isLoading } = useAuth()
	const { register, login } = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = (data) => {
		if (type === 'login') login(data)
		else register(data)

		reset()
	}

	return (
		<Meta title='Auth'>
			<section className='tw-flex tw-h-screen'>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.auth}>
					<Heading className='tw-capitalize tw-text-center tw-mb-4'>
						{type}
					</Heading>

					{isLoading ? (
						<SkeletonLoader
							inline
							count={2}
							className='tw-h-[77.19px] tw-mb-4'
							containerClassName='tw-flex-col'
						/>
					) : (
						<>
							<Field
								{...formRegister('email', {
									required: 'Email is required',
									pattern: {
										value: validEmail,
										message: 'Please enter a valid email address'
									}
								})}
								placeholder='Email'
								error={errors.email?.message}
							/>

							<Field
								{...formRegister('password', {
									required: 'Password is required',
									minLength: {
										value: 6,
										message: 'Min length should more than 6 symbols'
									}
								})}
								type='password'
								placeholder='Password'
								error={errors.password?.message}
							/>
						</>
					)}

					<Button
						type='submit'
						variant='orange'
						className={styles.button}
						disabled={isLoading}
					>
						Let's go
					</Button>

					<button
						type='button'
						className='tw-block tw-opacity-50 tw-mt-3 tw-mx-auto'
						onClick={() => setType(type === 'login' ? 'register' : 'login')}
						disabled={isLoading}
					>
						{type === 'login' ? 'Register' : 'Login'}
					</button>
				</form>
			</section>
		</Meta>
	)
}

export default Auth
