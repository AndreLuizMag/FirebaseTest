import React from 'react'
import style from './Style.module.scss'
import ToDoCard from '@/components/atoms/ToDoCard'

const ToDoCardCreate = () => {
	const hideLabel = () => {}

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
				/>
			</div>
			<div className={`${style.ContentInput} ps-relative`}>
				{/* <label
					htmlFor='description'
					className='ps-absolute color-gray-50 line-height-none'>
					Crie um to do
				</label> */}
				<textarea
					name='description'
					id='description'
					className={`w-100 color-gray-50`}
					placeholder='Crie um to do'></textarea>
			</div>
			<div
				className={`w-100 ds-flex-end flow-row-nw gap-sm`}>
				<button
					type='button'
					className={`${style.BtnAction} sm`}>
					Create new To Do
				</button>
			</div>
		</ToDoCard>
	)
}

export default ToDoCardCreate
