import React from 'react'
import { Link, NavLink } from 'react-router'

export default function Nav() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Projects</a></li>
                        <li><a>Education</a></li>
                        <li><a>Contact</a></li>

                    </ul>
                </div>
                <NavLink className="btn btn-ghost text-xl">
                    <img src="Logo.png" alt="" width={120} height={200} />
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '') } >Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink></li>
                    <li><NavLink to="/education" className={({ isActive }) => (isActive ? 'active' : '')}>Education</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn " to="https://drive.google.com/file/d/12fQFaAX79aeHkXm6PEJer9kny7YbCe8l/view" target='_blank' style={{ border: '1px solid' }}>Resume</Link>
            </div>
        </div>
    )
}
