import React, { Suspense } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carouselcom from '../components/Carouselcom'
import { Loading } from '../components/Loading';
import { useContext } from 'react';
import { Cartcontext } from '../context/Context'
import Stars from '../components/Stars';

const Home = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    axios.get('https://dummyjson.com/products?limit=8')
      .then((response) => {
        console.log('res', response.data);
        const result = response.data.products;
        setData(result);
      })
  }
  useEffect(() => {
    getData();
  }, [])

  let fstar=<i style={{fontSize:'1.2rem',padding:"0px"}} className="fa fa-star text-yellow-300" aria-hidden="true"></i>;
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  console.log(Globalstate.state.length);
  return (
    <>
      <Carouselcom dp={data} />
      <h1 className='text-slate-300 text-4xl font-sans  capitalize font-bold tracking-tight'>Featured Product</h1>
      <Suspense fallback={<Loading />}>
        <div className='grid mt-10 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center gap-4 mx-5'>
          {data.map((item, index) => {
            item.quantity = 1;
            return (
              <>
                <div className="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" key={item.id}>
                  <Link className="relative  justify-center h-52 overflow-hidden" to={`/products/${item.id}`}>
                    <img className="contain" src={item.thumbnail} alt={item.title} />
                    <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.discountPercentage}% OFF</span>
                  </Link>
                  <div className="mt-4 px-5 pb-2">
                    <Link to={`/products/${item.id}`}>
                      <h5 className="text-xl text-left tracking-tight text-slate-900">{item.title} </h5></Link>
                    <div className="mt-2 mb-5 flex ">
                      <p>

                        <span className="text-3xl font-bold text-slate-900">₹{item.price}</span>
                        <span className="text-sm ps-2 text-slate-900 line-through">₹{item.price}+30</span>
                      </p>

                    </div>
                    <div className='xl:hidden py-2'>
                      <span>{item.rating} Out Of 5</span>{fstar}| <span className='text-green-700'>In Stock : {item.stock}</span>
                    </div>
                    <div className="hidden xl:flex items-center  mb-4">
                      <Stars rating={item.rating}/>
                      <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-md font-semibold">{item.rating}</span>
                    </div>

                    <button onClick={() => { dispatch({ type: "ADD", payload: item }); }} className="flex w-full items-center justify-center rounded-md bg-indigo-800 px-5 py-2 text-center text-sm font-medium text-white hover:bg-white hover:text-indigo-800 border-2	 border-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      Add to cart</button>
                  </div>
                </div>
              </>)
          })}
        </div>
      </Suspense>
    </>
  )
}

export default Home