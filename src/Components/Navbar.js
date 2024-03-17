import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ( {articles} ) => {
  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <ul className="flex space-x-4">
            <li className='text-white font-bold hover:text-gray-200"'>
            <Link to='/' className='pl-6 pr-8'>
                Home
                </Link>
            </li>
            <li className='text-white font-bold hover:text-gray-200"'>
            <Link to='/about' className='pl-6 pr-8'>
                About
                </Link>
            </li>
            <li className='text-white font-bold hover:text-gray-200"'>
            <Link to='/articles' className='pl-6 pr-8'>
                ArticleList
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
