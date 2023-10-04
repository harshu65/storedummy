import React from 'react'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../context/Context';
import { useContext } from 'react';

const Header = () => {
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  console.log(Globalstate.state.length);

  function mobnav() {
    var x = document.getElementById("mobid");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return (
    <>
      <nav className='sticky top-0 px-4 pb-9 sm:pb-2 text-lg header  text-indigo-500 py-2 heading  justify-between bg-black z-10'>
        <Link to="/" className='float-left text-2xl'>DummyStore</Link>
        <div className='navb md:space-x-16 sm:space-x-8 hidden sm:block '>
          <Link to="/">Home</Link>
          <Link to="/Products">Shop All</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <div className='float-right '>
            <Link to="/Cart" className='text-xl'><i className="fa fa-shopping-cart" aria-hidden="true"></i>{Globalstate.state.length}
            </Link>
          </div>
        </div>
        <span onClick={() => mobnav()} className='float-right  sm:hidden'><i className="fa fa-bars" aria-hidden="true"></i></span>
      </nav>
      <div id="mobid" className='mobnav hidden text-indigo-500'>
        <Link to="/" >Home</Link>
        <Link to="/Products" >Shop All</Link>
        <Link to="/About" >About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Cart">Cart</Link>
      </div>
    </>
  )
}

export default Header