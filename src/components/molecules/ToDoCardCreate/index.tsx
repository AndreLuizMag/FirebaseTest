import React, { ReactNode, useState } from 'react'
import style from './Style.module.scss'
import ToDoCard from '@/components/atoms/ToDoCard'

interface ToDoCardCreateProps {
	title: string
	titleOnChange: React.ChangeEvent<HTMLInputElement>
	children?: string
	childrenOnChange: React.ChangeEvent<HTMLInputElement>
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const ToDoCardCreate = ({
	title,
	titleOnChange,
	children,
	childrenOnChange,
	onClick,
}: ToDoCardCreateProps) => {
	// const [titleValue, setTitleValue] = useState(title)
	// const [childrenValue, setChildrenValue] =
	// 	useState(children)

	// const handleTitleChanges = (
	// 	event: React.ChangeEvent<HTMLInputElement>
	// ) => {
	// 	const newValue = event.target.value
	// 	setTitleValue(newValue)
	// 	titleOnChange(newValue)
	// }

	// const handleChildrenChanges = (
	// 	event: React.ChangeEvent<HTMLInputElement>
	// ) => {
	// 	const newValue = event.target.value
	// 	setChildrenValue(newValue)
	// 	childrenOnChange(newValue)
	// }

	return (
		<ToDoCard>
			<div className={`${style.ContentInput} ps-relative`}>
				{/* <label
					htmlFor='title'
					className='ps-absolute title-sm line-height-none'>
					Título
				</label> */}
				<input
					type='text'
					name='title'
					id='title'
					className={`title-sm`}
					placeholder='Título'
					onChange={titleOnChange}
				/>
			</div>
			<div className={`${style.ContentInput} ps-relative`}>
				{/* <label
					htmlFor='description'
					className='ps-absolute color-gray-50 line-height-none'>
					Crie um to do
				</label> */}
				<input
					type='text'
					name='description'
					id='description'
					className={`${style.Description} w-100 color-gray-50`}
					placeholder='Crie um to do'
					onChange={handleChildrenChanges}
					value={childrenValue}
				/>
			</div>
			<div
				className={`w-100 ds-flex-end flow-row-nw gap-sm`}>
				<button
					type='button'
					className={`${style.BtnAction} sm`}
					onClick={onClick}>
					Create new To Do
				</button>
			</div>
		</ToDoCard>
	)
}

export default ToDoCardCreate
