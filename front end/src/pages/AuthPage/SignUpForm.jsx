import React from 'react'

function SignUpForm() {
  return (
    <div className=' flex h-full justify-center items-center '> 

<div className='bg-white rounded flex-col w-full max-w-sm shadow-2xl   '>
    <p className='text-white bg-[#0F4C67] font-bold rounded-t p-2 text-center' >Creér Votre Compte</p>
    <form className=' px-14 py-5 rounded flex flex-col items-center mt-5  '>
         <input type='text' placeholder='Nom & Prenom *' className='inputconnectForm'required/>
         <input type='text' placeholder='Email *'className='inputconnectForm' required/>
         <input type='password' placeholder='Mot de passe *'className='inputconnectForm' required/>
         <input type='password' placeholder='Confirmer Mot de passe *' className='inputconnectForm'required/>
         <button type="submit" className='bg-custom-blue rounded-2xl text-white font-semibold  w-2/3 p-1.5 px-3 mt-3 hover:bg-sky-400'>Creer</button>
    </form>
    
    </div>
    </div>
  )
}

export default SignUpForm