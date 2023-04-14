import React from 'react'
import style from './Style.module.scss'
import ToDoCard from '@/components/atoms/ToDoCard'

interface ToDoCardListProps {
	title: string
	description: string
}

const ToDoCardList = ({
	title,
	description,
}: ToDoCardListProps) => {
	return (
		<ToDoCard className={`${style.ToDoCard}`}>
			<span className={`${style.Title} title-sm`}>
				{title}
			</span>
			<p className='color-gray-50'>{description}</p>
			<div
				className={`${style.ContentBtnAction} w-100 ds-flex-end flow-row-nw gap-sm duration-normal ease-in-out`}>
				<BtnAction icon='launch' />
				<BtnAction icon='snap' />
				<BtnAction icon='close' />
			</div>
		</ToDoCard>
	)
}

export default ToDoCardList

interface BtnActionProps {
	onClick?: React.MouseEventHandler<HTMLButtonElement>
	icon: string
	tooltip?: string
}

const BtnAction = ({ icon, onClick }: BtnActionProps) => {
	return (
		<button
			type='button'
			className={`${style.BtnAction} p-02 font-size-lg`}
			onClick={onClick}>
			<i className={`bv-${icon}-solid`} />
		</button>
	)
}
