import React, { Suspense } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carouselcom from '../components/Carouselcom'
import { Loading } from '../components/Loading';
import { useContext } from 'react';
import { Cartcontext } from '../context/Context' 
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

  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  console.log(Globalstate.state.length);
  return (
    <>
      <Carouselcom dp={data}/>
      {/* <div className='prodslide'>
      <button class="left" onClick={leftScroll}>
      ↶
      </button>
      <div class='prodslides'>
      {data.map((dd) => (
         <Link to={`/products/${dd.id}`}>
        <div className='prodcard px-1 '>
          <img className='h-64 border-1 rounded-b-xl' src={dd.thumbnail} alt={dd.title}/>
          <p className='text-white'>{dd.title}</p>
        </div>
        </Link>
      ))}
      </div>
      <button class="right" onClick={rightScroll}>
      ↷
      </button>
      </div> */}
      
      <h1 className='text-slate-300 text-4xl font-sans  capitalize font-bold tracking-tight'>Featured Product</h1>
      <Suspense fallback={<Loading/>}>
      <div className='grid mt-10 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center gap-4 mx-5'>
        {data.map((item,index) => (
          
            <div class="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" key={index.id}>
              <a class="relative  justify-center h-52 overflow-hidden" href={`/products/${item.id}`}>
                <img class="contain" src={item.thumbnail} alt="product image" />
                <span class="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.discountPercentage}% OFF</span>
              </a>
              <div class="mt-4 px-5 pb-2">
              <Link to={`/products/${item.id}`}>
                  <h5 class="text-xl text-left tracking-tight text-slate-900">{item.title} </h5></Link>
                {/* <kbd className='text-sm text-gray-200 border rounded-full border-indigo-800 bg-indigo-800 px-2'>{d.category}</kbd> */}
                <div class="mt-2 mb-5 flex ">
                  <p>

                    <span class="text-3xl font-bold text-slate-900">₹{item.price}</span>
                    <span class="text-sm text-slate-900 line-through">₹{item.price}+30</span>
                  </p>

                </div>
                <div class="flex items-center  mb-4">
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg aria-hidden="true" class="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{item.rating}</span>
                </div>
                
                <button onClick={() => {dispatch({ type: "ADD", payload: item });}} class="flex w-full items-center justify-center rounded-md bg-indigo-800 px-5 py-2 text-center text-sm font-medium text-white hover:bg-white hover:text-indigo-800 border-2	 border-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to cart</button>
              </div>
            </div>
        ))}
      </div>
      </Suspense>
    </>
  )
}

export default Home