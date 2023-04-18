/* eslint-disable react-hooks/rules-of-hooks */
/* https://www.freecodecamp.org/news/nextjs-firebase-tutorial-build-an-evernote-clone/ */
import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import { database } from '../../../firebase'
import {
	collection,
	addDoc,
	getDocs,
} from 'firebase/firestore'

const index = () => {
	const dbInstance = collection(database, 'posts')

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')

	const create = async () => {
		console.log(dbInstance)
		console.log('Title - ', title)
		console.log('Description - ', desc)
		try {
			await addDoc(dbInstance, {
				postTitle: title,
				postDesc: desc,
			})
			setTitle('')
			setDesc('')
			console.log('User added successfully')
		} catch (error) {
			console.error('Error adding document: ', error)
		}
	}

	// const [posts, setPosts] = useState([])

	// const read = () => {
	// 	getDocs(dbInstance).then((data) => {
	// 		setPosts(
	// 			data.docs.map((item) => {
	// 				return { ...item.data(), id: item.id }
	// 			})
	// 		)
	// 	})
	// }

	// useEffect(() => {
	// 	read()
	// }, [])

	return (
		<>
			<Head>
				<title>Simple</title>
			</Head>
			<section className='p-block-16 bgc-gray-95'>
				<div className='bv-container-sm'>
					<div className='bv-row'>
						<div className='bv-col'>
							<form className='ds-flex flow-col-nw align-center gap-md'>
								<div className='block-content sm w-100'>
									<label htmlFor='name'>Title</label>
									<input
										type='text'
										name='name'
										id='name'
										onChange={(e) =>
											setTitle(e.target.value)
										}
										value={title}
									/>
								</div>
								<div className='block-content sm w-100'>
									<label htmlFor='description'>
										Description
									</label>
									<input
										type='text'
										name='description'
										id='description'
										onChange={(e) =>
											setDesc(e.target.value)
										}
										value={desc}
									/>
								</div>
								<button
									type='button'
									className='w-100 primary justify-center'
									onClick={create}>
									Save
								</button>
							</form>
						</div>
						<div className='bv-col'></div>
					</div>
				</div>
			</section>
		</>
	)
}

export default index
