import { FC, PropsWithChildren } from 'react'
import cn from 'clsx'

import styles from './Heading.module.scss'

interface IHeading {
	className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
	return <h1 className={cn(styles.title, className)}>{children}</h1>
}

export default Heading
