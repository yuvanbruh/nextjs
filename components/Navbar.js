import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between mx-auto' >
        <div className='mx-auto'>Facebook</div>
        <ul className='flex gap-3'>
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
            <Link href="/more"><li>More</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
