'use client';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-200 px-6'>
      <div className='relative max-w-lg w-full text-center space-y-8'>
        <h1 className='text-5xl md:text-6xl font-extrabold tracking-tight'>
          Coming Soon
        </h1>
        <p className='text-md md:text-lg text-gray-400'>
          A platform for everyone who loves to build, share, and grow. Stay
          tuned—you won’t want to miss what’s coming next.
        </p>

        <div className='flex justify-center space-x-3'>
          <span
            className='block w-3 h-3 bg-gray-600 rounded-full animate-pulse'
            style={{ animationDelay: '0s' }}
          />
          <span
            className='block w-3 h-3 bg-gray-600 rounded-full animate-pulse'
            style={{ animationDelay: '0.2s' }}
          />
          <span
            className='block w-3 h-3 bg-gray-600 rounded-full animate-pulse'
            style={{ animationDelay: '0.4s' }}
          />
        </div>

        <Link
          href='/'
          className='inline-block mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:bg-gray-800 transition'
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
