import React from 'react'
import { Link } from 'react-router-dom'
import { useLogout } from "../hooks/useLogout"
import '../styles/Home.css'

export default function Navbar() {
	const { logout } = useLogout()

  return (
		<div className='navbar'>
			<nav>
				<Link to='/' className='brand'>
					<h1>prompt.</h1>
				</Link>
				<Link to='/' className='right-links'>
					<h1>GET INSPIRED</h1>
				</Link>
				<Link to='/' className='right-links'>
					<h1>ABOUT</h1>
				</Link>
				<Link to='/' className='right-links'>
					<h1>CONTACT</h1>
				</Link>
				<Link onClick={logout} className='right-links'>
					<h1>LOG OUT</h1>
				</Link>
			</nav>
		</div>
	)
}
