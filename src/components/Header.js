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
  function closemob (){
    var x = document.getElementById("mobid");
    x.style.display = "none";
  }
//navigation links array
  const navlinks=[
    {label:"Home",link:"/"},{label:"Shop All",link:"/Products"},{label:"About",link:"/About"},{label:"Contact",link:"/Contact"},
  ]
  return (
    <>
      <nav className='sticky top-0 px-4 pb-9 sm:pb-2 text-lg header  text-indigo-500 py-2 heading  justify-between bg-black z-10'>
        <Link to="/" className='float-left text-2xl'>DummyStore</Link>
        <div className='navb md:space-x-16 sm:space-x-8 hidden sm:block '>
          {navlinks.map((d,i)=>(
          <Link key={i} to={d.link}>{d.label}</Link>
        ))}
          <div className='float-right '>
            <Link to="/Cart" className='text-xl'><i className="fa fa-shopping-cart" aria-hidden="true"></i>{Globalstate.state.length}
            </Link>
          </div>
        </div>
        <span onClick={() => mobnav()} className='float-right  sm:hidden'><i className="fa fa-bars" aria-hidden="true"></i></span>
      </nav>
      {/* mobile nav */}
      <div id="mobid" onClick={()=>closemob()} className='fixed z-10 h-full w-screen hidden bg-black/20 backdrop-blur-sm top-50 right-0'>
        <section className='text-indigo-500 bg-black flex-col absolute left-0 top-0 h-screen p-2 ps-0 gap-4 z-50 w-56 flex'>
        {navlinks.map((d,i)=>(
          <Link className='mobl text-lg' onClick={()=>closemob()}key={i} to={d.link}>{d.label}</Link>
        ))}
        <Link to="/Cart" className='text-lg' onClick={()=>closemob()}>Cart</Link>
        </section>
      </div>
    </>
  )
}

export default Header