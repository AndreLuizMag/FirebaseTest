// import React, { useState, useEffect, useRef } from 'react'
// import { doc, getDoc } from 'firebase/firestore'
// import { db } from '../../firebase'

// export default function useFetchTodos() {
// 	const [loading, setLoading] = useState(true)
// 	const [error, setError] = useState('')
// 	const [todos, setTodos] = useState({})

// 	useEffect(() => {
// 		async function fetchData() {
// 			try {
// 				const docRef = doc(db, 'users')
// 				const docSnap = await getDoc(docRef)
// 				if (docSnap.exists()) {
// 					setTodos(docSnap.data().todos)
// 					// setTodos('todos' in docSnap.data() ? docSnap.data().todos : {})
// 				} else {
// 					setTodos({})
// 				}
// 			} catch (err) {
// 				setError('Failed to load todos')
// 				console.log(err)
// 			} finally {
// 				setLoading(false)
// 			}
// 		}
// 		fetchData()
// 	}, [])

// 	return { loading, error, todos, setTodos }
// }
