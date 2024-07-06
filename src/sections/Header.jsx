import React from 'react'
import logo from "../assets/logo.svg";

export const Header = () => {
  return (
    <header className='absolute z-10 flex w-full  justify-between  '> 
     
      <div className='flex my-5  mx-10 items-end space-x-2'>
       <img 
      src={logo}>
      </img>
      <p className='font-bold text-teal-900 text-xl'>كريتي</p>
      
      </div>

      <div  className='flex items-center space-x-4 mx-10'>
        <button className='bg-white rounded p-1.5 text-xs font-semibold hover:text-gray-600'>
           Publier annonce
        </button>

         <div className='font-semibold text-sm text-white hover:text-gray-600'>
          Sign In / Sign Up 
         </div>
      </div>

    </header>
  )
}
