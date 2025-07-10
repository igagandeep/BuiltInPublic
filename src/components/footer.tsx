import Link from 'next/link';
import { FaLinkedin, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='w-full bg-black text-gray-300 px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-4'>
      <nav className='flex flex-wrap gap-4 text-sm'>
        <Link href='/coming-soon'>About Us</Link>
        <Link href='/coming-soon'>Privacy Policy</Link>
        <Link href='/coming-soon'>Disclaimers</Link>
        <Link href='/coming-soon'>Terms and Conditions</Link>
        <Link href='/coming-soon'>Disclosures</Link>
      </nav>

      <div className='flex gap-3'>
        <a
          href='https://www.linkedin.com/company/built-in-public/'
          target='_blank'
          rel='noopener noreferrer'
          className='w-8 h-8 rounded-full bg-gray-700 hover:bg-purple-600 flex items-center justify-center transition'
        >
          <FaLinkedin className='w-4 h-4' />
        </a>
        <a
          href='#'
          className='w-8 h-8 rounded-full bg-gray-700 hover:bg-purple-600 flex items-center justify-center transition'
        >
          <FaFacebook className='w-4 h-4' />
        </a>
        <a
          href='#'
          className='w-8 h-8 rounded-full bg-gray-700 hover:bg-purple-600 flex items-center justify-center transition'
        >
          <FaTwitter className='w-4 h-4' />
        </a>
        <a
          href='https://github.com/Christin-paige/BuiltInPublic'
          className='w-8 h-8 rounded-full bg-gray-700 hover:bg-purple-600 flex items-center justify-center transition'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaGithub className='w-4 h-4' />
        </a>
      </div>
    </footer>
  );
}
