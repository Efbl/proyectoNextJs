import Link from 'next/link'
import React from 'react'
import PaddingContainer from '../layout/padding-container'

export default function Navigation() {
  return (
    
    <div className="sticky top-0 z-[999] left-0 right-0 border-b bg-white bg-opacity-50 backdrop-blur-md">
    <PaddingContainer>
    <div className='py-5 flex items-center justify-between'>
        <Link href="/" className="font-bold text-lg">Explorer</Link>
        <nav>
            <ul className='flex items-center gap-3 text-neutral-600'>
                <li>
                    <Link href="/cities">Ciudades</Link>
                </li>
                <li>
                    <Link href="/experiences">Experiencias</Link>
                </li>
            </ul>
        </nav>
    </div>
    </PaddingContainer>
    </div>
    
  )
}



