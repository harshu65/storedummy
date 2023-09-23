import React from 'react'

export const Loading = () => {
  return (
    <div className='h-[66vh] items-center flex justify-center'>
   <div
  class="inline-block text-indigo-500  h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
  role="status">
  <span
    class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
</div>
  </div>
  )
}
