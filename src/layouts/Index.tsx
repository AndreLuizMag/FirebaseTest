import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import React, { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	)
}

export default Layout
