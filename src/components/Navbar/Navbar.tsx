'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className='fixed top-0 w-[100vw] flex items-center justify-between px-2 md:px-10 py-2 bg-black opacity-75 z-50'>
      <Link href='/' className='w-2/5 md:w-1/4'>
        <Image
          src='/BuiltInPublic.png'
          alt='BuiltInPublic logo'
          width={300}
          height={65}
          className='hover:opacity-80 transition-all duration-100'
        />
      </Link>
    </nav>
  );
}
