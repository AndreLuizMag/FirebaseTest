import React, { useState } from 'react'
// import ToDoCardCreate from '@/components/molecules/ToDoCardCreate'
// import style from './Style.module.scss'
// import ToDoCard from '@/components/atoms/ToDoCard'
// import ToDoCardList from '@/components/molecules/ToDoCardList'

const ToDoCreate = () => {
	// const [title, setTitle] = useState('')
	// const [description, setDescription] = useState('')

	// const [todo, setTodo] = useState('')
	// const [todoList, setTodoList] = useState({})
	// console.log(todoList)

	// const handleAddTodo = async () => {
	// 	if (!title) {
	// 		return
	// 	}
	// 	const newKey =
	// 		Object.keys(todoList).length === 0
	// 			? 1
	// 			: Math.max(...Object.keys(todoList)) + 1
	// 	setTodoList({ ...todoList, [newKey]: title })
	// }

	return (
		<div>
			{/* <ToDoCard>
				<div
					className={`${style.ContentInput} ps-relative`}>
					<input
						type='text'
						name='title'
						id='title'
						className={`title-sm`}
						placeholder='Título'
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div
					className={`${style.ContentInput} ps-relative`}>
					<input
						type='text'
						name='description'
						id='description'
						className={`${style.Description} w-100 color-gray-50`}
						placeholder='Crie um to do'
					/>
				</div>
				<div
					className={`w-100 ds-flex-end flow-row-nw gap-sm`}>
					<button
						type='button'
						className={`${style.BtnAction} sm`}
						onClick={handleAddTodo}>
						Create new To Do
					</button>
				</div>
			</ToDoCard>
			{Object.keys(todoList).map((todo, i) => {
				return (
					<ToDoCardList
						key={i}
						title={todoList[todo]}
						description=''
					/>
				)
			})} */}
		</div>
	)
}

export default ToDoCreate
