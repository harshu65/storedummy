import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <footer className='text-lg header text-white pt-5  heading'>
        <div className='md:space-x-16 sm:space-x-8 space-x-4'>
        <Link to="/">Home</Link>
        <Link to="/Products">All Products</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        </div>
        <hr/>
        <div className='grid md:grid-cols-2 py-4'>
              <p className="copyright-text">Copyrights © 2023. All rights reserved by
                <a href="#"> Harsh</a>.
              </p>
              <ul className="social-icons">
                {/* <li><a className="facebook " href="#"><i className="fa fa-facebook hover:bg-gray-500 border rounded"></i></a></li>
                <li><a className="twitter" href="#"><i className="fa fa-twitter hover:bg-gray-500 border rounded"></i></a></li> */}
                <li><a className="dribbble" href="mailto:harshkrl123@gmail.com"><i className="fa fa-envelope hover:bg-gray-500 border rounded"></i></a></li>
                <li><a className="linkedin" href="https://www.linkedin.com/in/harsh-kureel/"><i className="fa fa-linkedin hover:bg-gray-500 border rounded"></i></a></li>
              </ul>
        </div>
      </footer>
    </>
  )
}

export default Footer