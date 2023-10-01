import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>
    <section className="page_404 text-slate-500 py-10">
		<h2 className='text-4xl p404'>404</h2>
        <div className='py-20'>
		<p className='capitalize text-2xl gthome'>the page you are looking for is not available!</p>
		<Link to="/" className="gthome border-0 rounded-full px-4 py-1 bg-purple-500 text-white hover:bg-purple-700">Go to Home</Link>
        </div>
</section>
    </>
  )
}

export default PageNotFound