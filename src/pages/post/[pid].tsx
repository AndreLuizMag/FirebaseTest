import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

import { database } from '../../../firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

interface Post {
	id: string
	title: string
	desc: string
}

const Post = () => {
	const router = useRouter()
	const { pid } = router.query as { pid: string }
	const [message, setMessage] = useState('Carregando...')

	const [post, setPost] = useState<Post | null>(null)

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const postRef = doc(
					collection(database, 'posts'),
					pid
				)
				const postDoc = await getDoc(postRef)

				if (postDoc.exists()) {
					const postData = postDoc.data()
					const post = {
						id: postDoc.id,
						title: postData?.postTitle || '',
						desc: postData?.postDesc || '',
					}

					setPost(post)
				} else {
					setMessage('Post inexistente')
				}
			} catch (error) {
				setMessage('Erro na busca, consulte o console')
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
								<span>{message}</span>
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Post
