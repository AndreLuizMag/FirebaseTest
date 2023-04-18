import ToDoCreate from '@/components/organisms/ToDoCreate'
import ToDoCardList from '@/components/molecules/ToDoCardList'
import Head from 'next/head'
// import ToDoCard from '@/components/atoms/ToDoCard'

// import style from './Style.module.scss'
// import { useState } from 'react'

// import { doc, setDoc } from 'firebase/firestore'
// import { db } from '../../firebase'

export default function Home() {
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
	// 	setTitle('')
	// 	const userRef = doc(db, 'user')
	// }

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			{/* <main>
				<div className='bv-container-sm'>
					<div className='bv-row align-stretch gap-lg'>
						<div className='bv-col'>
							<ToDoCard>
								<div
									className={`${style.ContentInput} ps-relative`}>
									<input
										type='text'
										name='title'
										id='title'
										className={`title-sm`}
										placeholder='Título'
										onChange={(e) =>
											setTitle(e.target.value)
										}
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
						</div>
						<div className='bv-col ds-flex flow-col-nw gap-lg'>
							{Object.keys(todoList).map((todo, i) => {
								return (
									<ToDoCardList
										key={i}
										title={todoList[todo]}
										description=''
									/>
								)
							})}
						</div>
					</div>
				</div>
			</main> */}
		</>
	)
}
