import Link from 'next/link'
import React from 'react'

import style from './Style.module.scss'

interface CardSearchProps {
	href?: string
	title?: string
	children?: string
}

const CardSearch = ({
	href,
	title,
	children,
}: CardSearchProps) => {
	return (
		<Link
			href={href ? href : '#'}
			className={`${style.CardSearch} p-04 ds-flex-start flow-col-nw gap-sm bgc-primary-03 radius-md text-decoration-none duration-none property-shadow ease-in-out`}>
			<h4 className='title-sm'>
				{title ? title : 'Title'}
			</h4>
			<p className='color-gray-50 font-weight-400'>
				{children ? children : 'Description'}
			</p>
		</Link>
	)
}

export default CardSearch
