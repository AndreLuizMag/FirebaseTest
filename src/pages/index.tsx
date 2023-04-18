import Head from 'next/head'
import React, { useState } from 'react'

import { database } from '../../firebase'
import { collection, addDoc } from 'firebase/firestore'
import CardSearch from '@/components/atoms/cardSearch'

export default function Home() {
	const dbInstance = collection(database, 'posts')
	const [message, setMessage] = useState('')

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')

	// Create
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
			setMessage('User added successfully')
		} catch (error) {
			setMessage('Error, consult console')
			console.error(error)
		}
	}

	// Update

	// Read

	// search
	const [search, setSearch] = useState('')

	// Delete

	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main className='bgc-gray-95'>
				<section>
					<div className='bv-container-sm ds-flex flow-col-nw gap-xl'>
						<div className='bv-row'>
							<div className='bv-col'>
								<div className='ds-flex flow-col-nw gap-sm p-02 radius-lg bgc-primary-03'>
									<span className='font-weight-bold'>
										Console test:
									</span>
									<span>{message}</span>
								</div>
							</div>
						</div>
						<div className='bv-row align-stretch gap-lg'>
							<div className='bv-col ds-flex flow-col-nw gap-lg'>
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
							<div className='bv-col ds-flex flow-col-nw gap-md'>
								<div className='block-content sm w-100'>
									<label htmlFor='search'>
										Description
									</label>
									<input
										type='search'
										name='search'
										id='search'
										onChange={(e) =>
											setSearch(e.target.value)
										}
										value={search}
									/>
								</div>
								<div className='ds-flex flow-col-nw gap-sm'>
									<span>Resultados:</span>
									<CardSearch title='Lorem ipsum'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quaerat hic dolorum,
										animi eos omnis at delectus
										exercitationem in nostrum laudantium
										deserunt consequuntur veritatis optio
										sint vero facilis. Quo, dolor
										aspernatur!
									</CardSearch>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
