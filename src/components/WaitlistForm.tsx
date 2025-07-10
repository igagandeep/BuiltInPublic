'use client';
import { useState } from 'react';

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const MAILCHIMP_URL =
    'https://gmail.us18.list-manage.com/subscribe/post?u=a0bffa39ec5c1dcce6c6ace4c&id=620067e3f5';

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    (e.target as HTMLFormElement).submit();
  };

  const handleIframeLoad = () => {
    if (loading) {
      setSubmitted(true);
      setLoading(false);
    }
  };

  const clearBanner = () => {
    if (submitted) setSubmitted(false);
  };

  return (
    <div className='bg-gray-800 p-8 rounded-2xl max-w-xl mt-12 w-full mx-auto shadow-lg text-center'>
      {submitted && (
        <div className='text-green-400 font-medium mb-4'>
          🎉 Thanks for subscribing!
        </div>
      )}

      <h2 className='text-3xl font-bold text-white mb-2'>Join the Waitlist</h2>
      <p className='text-gray-300 mb-6'>
        Be the first to know when we launch. We’ll keep you informed with
        important updates and early access invitations.
      </p>

      <form
        action={MAILCHIMP_URL}
        method='post'
        target='hidden_iframe'
        className='space-y-4'
        onSubmit={handleSubmit}
      >
        <input
          name='FNAME'
          type='text'
          placeholder='First name'
          required
          disabled={loading}
          onChange={clearBanner}
          className='w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
        />
        <input
          name='EMAIL'
          type='email'
          placeholder='Email address'
          required
          disabled={loading}
          onChange={clearBanner}
          className='w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
        />
        <button
          type='submit'
          disabled={loading || submitted}
          className='w-full py-3 rounded-lg font-medium cursor-pointer text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition disabled:opacity-50'
        >
          {loading ? 'Submitting…' : 'Subscribe'}
        </button>
      </form>

      <iframe
        name='hidden_iframe'
        onLoad={handleIframeLoad}
        style={{ display: 'none' }}
      />
    </div>
  );
}
