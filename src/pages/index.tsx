import Head from 'next/head'
import React, { useEffect, useState } from 'react'

import { database } from '../../firebase'
import {
	collection,
	addDoc,
	doc,
	query,
	where,
	getDocs,
	onSnapshot,
} from 'firebase/firestore'
import CardSearch from '@/components/atoms/CardSearch'

interface Post {
	id: string
	title: string
	desc: string
}

export default function Home() {
	const dbInstance = collection(database, 'posts')
	const [message, setMessage] = useState('')

	const [title, setTitle] = useState('')
	const [desc, setDesc] = useState('')

	// Create
	const create = async () => {
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
	const [postsArray, setPostsArray] = useState<Post[]>([])
	const [searchMessage, setSearchMessage] =
		useState('Carregando...')

	useEffect(() => {
		const unsubscribe = onSnapshot(
			dbInstance,
			(querySnapshot) => {
				const notesData = querySnapshot.docs.map((doc) => {
					return {
						id: doc.id,
						title: doc.data().postTitle,
						desc: doc.data().postDesc,
					}
				})

				setPostsArray(notesData)
				setSearchMessage('')
			}
		)

		// Função de limpeza para desinscrever do snapshot quando o componente for desmontado
		return () => {
			unsubscribe()
		}
	}, [])

	// search
	const [search, setSearch] = useState('')
	const [searchResults, setSearchResults] = useState<
		Post[]
	>([])

	useEffect(() => {
		// const unsub = onSnapshot(
		// 	query(
		// 		dbInstance,
		// 		where('postTitle', '>=', 'Teste - 01')
		// 	),
		// 	(querySnapshot) => {
		// 		querySnapshot.forEach((doc) => {
		// 			console.log('Document data: ', doc.data())
		// 		})
		// 	}
		// )

		const searchPosts = async () => {
			try {
				const q = query(
					dbInstance,
					where('postTitle', '==', 'Teste - 0')
				)
				const querySnapshot = await getDocs(q)
				const results = querySnapshot.docs.map((doc) => {
					return {
						id: doc.id,
						title: doc.data().postTitle,
						desc: doc.data().postDesc,
					}
				})
				setSearchResults(results)
				console.log('Results - ', searchResults)
			} catch (error) {
				console.error('Error searching posts:', error)
			}
		}
		searchPosts()
	}, [])

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
									<label htmlFor='search'>Search</label>
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
									{/* <CardSearch title='Lorem ipsum'>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Quaerat hic dolorum,
										animi eos omnis at delectus
										exercitationem in nostrum laudantium
										deserunt consequuntur veritatis optio
										sint vero facilis. Quo, dolor
										aspernatur!
									</CardSearch> */}
									{/* {searchResults.map((post) => (
										<CardSearch
											key={post.id}
											title={post.postTitle}>
											{post.postDesc}
											</CardSearch>
										))} */}
									<div
										className='ovf-auto ds-flex flow-col-nw gap-sm'
										style={{ maxHeight: '50vh' }}>
										{searchMessage}
										{postsArray.map((post) => (
											<CardSearch
												key={post.id}
												title={post.title}>
												{post.desc}
											</CardSearch>
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
