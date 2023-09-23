import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Relatedpro = () => {
    const [data, setData] = useState([]);

  const getData = () => {
    axios.get('https://dummyjson.com/products?limit=15')
      .then((response) => {
        console.log('res', response.data);
        const result = response.data.products;
        setData(result);
      })
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
  <div className=" bg-black text-indigo-500">
      <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
        <h2 className="text-6xl capitalize font-bold tracking-tight ">Customers also purchased</h2>

        <div className="relsec mt-6 flex overflow-scroll flex-nowrap ">
        {data.map((d)=>(<Link to={`/products/${d.id}`} >
        <div key={d.id} className="group relative px-2">
        <div className=" overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 lg:h-40 w-80">
          <img
            src={d.thumbnail}
            alt={d.title}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between text-md ptitle">
          <div className='px-2 text-left capitalize'>
            <h3>
              <a href={d.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {d.title}
              </a>
            </h3>
            <p >{d.category}</p>
          </div>
          <p className=" font-medium ">₹{d.price}</p>
        </div>
      </div>
      </Link>
        ))}
    </div>
      </div>
      </div>
    </>
  )
}

export default Relatedpro