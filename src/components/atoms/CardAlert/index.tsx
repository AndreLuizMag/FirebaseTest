import React from 'react'
import style from './Style.module.scss'

interface CardAlertProps {
	children: string
}

const CardAlert = ({ children }: CardAlertProps) => {
	return (
		<div
			className={`${style.CardAlert} p-04 ds-flex-start flow-col-nw gap-sm bgc-primary-03 radius-md`}>
			{children}
		</div>
	)
}

export default CardAlert
