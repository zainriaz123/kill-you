import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-4 bg-red-500 uppercase-1'>
        <Link href="\">Home page</Link>
        <Link href="\address">Address page</Link>
        <Link href="\contact">Contact page</Link>
    </div>
  )
}

export default Header