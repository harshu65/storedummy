import React from 'react'

const Stars = ({rating}) => {
    const rate=Math.round(rating);
    let fstar=<i className="fa fa-star text-yellow-300" aria-hidden="true"></i>;
    let ostar=<i className="fa fa-star-o text-yellow-300" aria-hidden="true"></i>
    // let hstar=<i class="fa fa-star-half" aria-hidden="true"></i>
    // : rate>= n?(hstar)
  return (
    <>
    {
        [...Array(5)].map((_,i)=>
        (
            <span key={i}>
                {rate > i ?(fstar) :(ostar)}
            </span>
        )
        )
    }
    </>
  )
}

export default Stars