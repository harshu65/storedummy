import React from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Relatedpro from '../components/Relatedpro';
import { useContext } from 'react';
import { Cartcontext } from '../context/Context';

const Product = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  let imagenotf = "https://img.freepik.com/free-vector/gradient-no-photo-sign-design_23-2149288316.jpg?w=740&t=st=1694534055~exp=1694534655~hmac=57c9fb81062decdd9d110181dc3b9b96f3996233700c2a018bebaa8153fa3179";
  const getData = () => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        console.log('res', response.data);
        const result = response.data;
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


  console.log("image stats", data.images ? data.images[0] : "")
  //change img on main thumbnail container
  function ichnage(x) {
    let img = document.getElementById("thumbi");
    img.src = data.images ? data.images[`${x}`] : "";
    var element = document.getElementById("thumbid");
    element.classList.add("imgf");
  }
  const [title, SetTitle] = useState('Add to Cart')
  const handclick = () => {
    SetTitle('Added!')
  }
  //Below we are iterating object .NOTE we can't use map for objs
  Object.keys(data).length > 0 && <div>P not found</div>
  data.quantity = 1;
  return (
    <>
      <section className='pb-24'>

        <div className="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-neutral-200 shadow-md">
          <div className="relative flex h-full flex-col  md:flex-row">
            <div className="relative p-8 md:w-4/6">
              <div className="flex flex-col md:flex-row">
                <h2 className="mb-2 text-left text-2xl font-black capitalize">{data.title}</h2>
                <span className="ml-2 px-2 border-t-2 rounded-b text-xs uppercase bg-indigo-800 w-50">{data.category}</span>
              </div>
              <p className="mt-3 font-sans text-left text-base tracking-normal">{data.description}</p>
              <div className="flex flex-col md:flex-row md:items-end">
                <p className="mt-6 text-4xl font-black">₹{data.price}<sup className="align-super text-sm">00</sup></p>
                <span className="ml-2 text-xs uppercase text-lime-400">{data.stock} In stock</span>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row">
                <button className="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-emerald-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500"
                  onClick={() => { dispatch({ type: "ADD", payload: data }); handclick() }} >
                  <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {title}
                </button>
                
              </div>
            </div>
            <div id="thumbid" className="pthumb zoom  mx-auto flex  px-5 pt-1 md:p-8" >
              <img id="thumbi" className=" block h-auto max-w-full rounded-md shadow-lg"
                src={(data.images ? data.images[0] : { imagenotf })} alt={data.title} />
            </div>
            <div className=' justify-center flex md:block md:p-8 md:px-5 pt-4 md:pt-0'>
              <span className='top  '><i className="fa fa-arrow-circle-up hover:text-indigo-500 hover:cursor-pointer animate-bounce" aria-hidden="true"></i></span>
              <div className="h-34 w-28  px-5 mt-1  md:px-0 hover:cursor-pointer
              relative  overflow-hidden bg-cover bg-no-repeat" >
                <img className="transition duration-300 ease-in-out hover:scale-110" onClick={() => ichnage(0)}
                  src={data ? (data.images ? data.images[0] : { imagenotf }) : ""} alt={data.title} />
              </div>
              <div className="h-34 w-28  px-5 mt-1  md:px-0 hover:cursor-pointer
              relative  overflow-hidden bg-cover bg-no-repeat" >
                <img className="transition duration-300 ease-in-out hover:scale-110" onClick={() => ichnage(1)}
                  src={data ? (data.images ? data.images[1] : { imagenotf }) : ""} alt={data.title} />
              </div>
              <div className="h-34 w-28  px-5 mt-1  md:px-0 hover:cursor-pointer
              relative  overflow-hidden bg-cover bg-no-repeat" >
                <img className="transition duration-300 ease-in-out hover:scale-110" onClick={() => ichnage(2)}
                  src={data ? (data.images ? data.images[2] : { imagenotf }) : ""} alt={data.title} />
              </div>
              <span className='bottom '><i className="fa fa-arrow-circle-down hover:text-indigo-500 hover:cursor-pointer animate-bounce" aria-hidden="true"></i></span>
            </div>
          </div>
        </div>
      </section>
      <Relatedpro />
    </>
  )
}

export default Product