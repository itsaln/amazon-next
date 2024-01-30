'use client'

import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { useAuth } from '@/hooks/useAuth'
import { useActions } from '@/hooks/useActions'

import { IEmailPassword } from '@/store/user/user.interface'

import { validEmail } from '@/shared/regex'

import Button from '@/ui/button/Button'
import Heading from '@/ui/heading/Heading'
import Field from '@/ui/field/Field'
import SkeletonLoader from '@/ui/skeleton-loader'

import { useAuthRedirect } from './useAuthRedirect'

const Auth: FC = () => {
	useAuthRedirect()

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
		<section className='tw-flex tw-h-screen'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='tw-w-full tw-max-w-[400px] tw-bg-white tw-rounded-lg tw-shadow-sm tw-py-6 tw-px-8 tw-m-auto'
			>
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
					className='tw-w-full'
					disabled={isLoading}
				>
					{'Let\'s go'}
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
	)
}

export default Auth
