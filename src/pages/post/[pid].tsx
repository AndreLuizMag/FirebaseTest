import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { database } from '../../../firebase'
import {
	collection,
	addDoc,
	doc,
	query,
	where,
	getDocs,
	getDoc,
	onSnapshot,
} from 'firebase/firestore'

interface Post {
	id: string
	title: string
	desc: string
}

const Post = () => {
	const router = useRouter()
	const { pid } = router.query as { pid: string }

	const [post, setPost] = useState<Post | null>(null)

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const postRef = doc(
					collection(database, 'posts'),
					pid
				)
				console.log(postRef)
				const postDoc = await getDoc(postRef)

				if (postDoc.exists()) {
					const postData = postDoc.data()
					const post = {
						id: postDoc.id,
						title: postData?.postTitle || '',
						desc: postData?.postDesc || '',
					}

					setPost(post)
					console.log(post)
				} else {
					console.log('Documento não encontrado')
				}
			} catch (error) {
				console.error('Erro ao buscar post:', error)
			}
		}

		fetchPost()
	}, [])

	return (
		<main className='ds-flex flow-col-nw gap-xl'>
			<section>
				<div className='bv-container-sm'>
					<div className='bv-row'>
						<div className='bv-col'>
							<Link
								href={`/`}
								className='text-decoration-none'>
								<i className='bv-arrow-back-solid'></i>
								Voltar
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className='bv-container-sm'>
					<div className='bv-row'>
						<div className='bv-col'>
							{post ? (
								<div className='block-content md'>
									<h1>{post.title}</h1>
									<p>{post.desc}</p>
								</div>
							) : (
								<p>Carregando...</p>
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Post
