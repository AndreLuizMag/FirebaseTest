import ToDoCardCreate from '@/components/molecules/ToDoCardCreate'
import ToDoCardList from '@/components/molecules/ToDoCardList'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<main>
				<div className='bv-container-sm'>
					<div className='bv-row align-stretch gap-lg'>
						<div className='bv-col'>
							<ToDoCardCreate />
						</div>
						<div className='bv-col ds-flex flow-col-nw gap-lg'>
							<ToDoCardList
								title='Title examples'
								description='Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Exercitationem totam magni
                asperiores dolores nam, soluta quisquam
                laborum placeat reiciendis distinctio,
                voluptatum iusto aspernatur. Nulla ratione
                nostrum exercitationem provident rerum iste?'
							/>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
