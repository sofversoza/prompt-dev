import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import '../styles/Home.css'

export default function Navbar() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logout()
      navigate("/landing-page")
    } catch {
    }
  }

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
				<Link onClick={handleLogout} className='right-links'>
					<h1>LOG OUT</h1>
				</Link>
			</nav>
		</div>
	)
}
