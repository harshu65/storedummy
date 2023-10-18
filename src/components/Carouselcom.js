import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Carouselcom = (props) => {
  return (
    <>
    <Carousel className='mb-4'>
    {props.dp.map((d)=>(
      <div key={d.id}>
        <img src={d.thumbnail} className='' alt={d.title}/>
        <Link to={`/products/${d.id}`}>
          <p className="legend">{d.title}</p>
        </Link>
      </div>
      ))}
    </Carousel>
    </>
  );
};

export default Carouselcom;