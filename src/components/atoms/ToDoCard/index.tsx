import React, { ReactNode } from 'react'
import style from './Style.module.scss'

interface ToDoCardProps {
	className?: string
	children: ReactNode
}

const ToDoCard = ({
	className,
	children,
}: ToDoCardProps) => {
	return (
		<div
			className={`${style.ToDoCard} ${className} ps-relative pt-08 pb-02 p-inline-06 ds-flex flow-col-nw gap-sm radius-2xl`}>
			{children}
		</div>
	)
}

export default ToDoCard
