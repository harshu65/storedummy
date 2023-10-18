import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../context/Context';
import { useContext } from 'react';

export const Products = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://dummyjson.com/products')
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
  // console.log(Globalstate);
  console.log(Globalstate.state.length);

  let catt=["smartphones","laptops","fragrances","skincare","groceries","furniture","tops","sunglasses","automotive","motorcycle","lighting","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","home-decoration"];
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = data.slice(firstIndex, lastIndex)
  const npage = Math.ceil(data.length / recordsPerPage)

  const numbers = [...Array(npage + 1).keys()].slice(1)

  // const filterByCategory = category => {
  //   setData(
  //     data.filter(d => {
  //       return d.category === category
  //     })
  //   )
  // }
  // const Categories = Array.from(
  //   new Set(data.map(data => data.category))
  // )
  return (
    <>
      <h2 className='my-4  mt-12 capitalize text-center  text-slate-300
      text-7xl capitalize font-bold tracking-tight'>All products</h2>
      <div className="catscroll text-white  overflow-scroll flex-nowrap md:space-x-4 sm:space-x-4 hidden sm:flex pt-4 my-8 mx-8 ">
        {catt.map((d, i) =>
          <Link to={`/products/category/${d}`} className='catbtn px-6 py-1  capitalize border rounded-full
        hover:bg-indigo-600 self-baseline' key={i}>{d}</Link>
        )}
      </div>
      <div className='grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-items-center gap-4 mx-5 '>
         
        {records.map((item, index) => {
          item.quantity = 1;
          return (
            <>
              <div className="relative  flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" key={index}>
                <Link className="relative flex h-52 overflow-hidden justify-center" to={`/products/${item.id}`}>
                  <img className="contain" src={item.thumbnail} alt={item.title} />
                  <span className="absolute top-0 right-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">{item.discountPercentage}% OFF</span>
                </Link>
                <div className="mt-4 px-5 pb-2">
                    <h5 className=" text-xl heading ptitle text-left tracking-tight text-slate-900">{item.title} </h5>

                  <div className="mt-2 mb-5 flex ">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">₹{item.price}</span>
                      <span className="text-sm text-slate-900 line-through">₹{item.price}+30</span>
                    </p>

                  </div>
                  <div className="flex items-center  mb-4">
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{item.rating}</span>
                  </div>

                  <button onClick={() => { dispatch({ type: "ADD", payload: item }); }} className="flex w-full items-center justify-center rounded-md bg-indigo-800 px-5 py-2 text-center text-sm font-medium text-white hover:bg-white hover:text-indigo-800 border-2	 border-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-lg shadow-indigo-500/50">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                   Add to Cart
                  </button>

                </div>
              </div>
            </>);
        })}
      </div>

      <nav className='text-white py-8'>
        <ul className='pagination inline-flex'>
          <li className='page-item px-2 sm:px-6 '>
            <button className='page-link hover:text-black hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 border-0 rounded-full px-4 ' onClick={prePage}>Prev</button>
          </li>
          {numbers.map((n, i) => (
            <li className={`page-item hover:bg-white hover:text-black border-1 rounded-full px-4 ${currentPage === n ? `active` : ''}`} key={i}>
              <button className='page-link flex' onClick={() => changeCPage(n)}>{n}</button>
            </li>
          ))}
          <li className='page-item px-2 sm:px-6'>
            <button className='page-link hover:text-black hover:bg-indigo-500 shadow-lg shadow-indigo-500/50 border-0 rounded-full px-4' onClick={nextPage}>Next</button>
          </li>
        </ul>
      </nav>
    </>

  )
  function prePage() {
    if (currentPage !== firstIndex) {
      setCurrentPage(currentPage - 1)
      window.scroll(0,0)
    }
  }
  function changeCPage(id) {
    setCurrentPage(id)
    window.scroll(0,0)
  }
  function nextPage() {
    if (currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1)
      window.scroll(0,0)
    } else {
      return currentPage;
    }
  }
}
export default Products