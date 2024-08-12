import React from 'react'
import Header from '../../components/Header2'
import HeaderImg from "../../assets/HeaderHouse.png"
import SignInForm from './SignInForm'


function SignIn() {
  return (
    <div>
    <Header/>
    
    <div className='relative h-screen'>
      <img src={HeaderImg} className='absolute h-full w-full -z-10  opacity-100 object-fill' />
      <SignInForm/>
    </div>
  </div>
  )
}

export default SignIn