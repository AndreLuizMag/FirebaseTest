import Link from 'next/link'
import React from 'react'

const post = () => {
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
							<div className='block-content md'>
								<h1>Lorem Ipsum</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Eos natus maiores porro,
									at nemo totam labore odio blanditiis in
									perspiciatis ipsam doloribus placeat quasi
									minima architecto eveniet temporibus animi
									assumenda.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}

export default post
