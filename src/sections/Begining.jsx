import React from 'react'
import HeaderHouse from "../assets/HeaderHouse.png";



function Begining() {
  return (
    <div className='w-full border-black border-solid relative  '>



   
      <img className="absolute w-full h-full object-contain " src={HeaderHouse} alt="HeaderHouse"  ></img>
    <div className="relative  z-10 my-40 w-full  sm:max-w-sm   sm:mx-80 px-10 py-6  
     bg-gradient-to-b from-sky-950/90 to-teal-200/90 rounded-[5px] ">
     
      <p className='text-white text-xl font-bold'>Trouvrer votre maison facilment </p>
    
    <form className='flex flex-col  '>

      <div className='mt-8'>
      <label className='text-white text-sm  font-medium'>Rercherche selon:</label>
      
      <div className='flex justify-between mt-2'>

      <button className='bg-zinc-300 p-1 w-[85px] rounded  text-neutral-800 text-sm font-medium hover:bg-green-50'>Faculté</button>
      <button className='bg-zinc-300 p-1 w-[85px] rounded    text-neutral-800 text-sm font-medium hover:bg-green-50'>Plage</button>
      <button className='bg-zinc-300 p-1 w-[85px] rounded    text-neutral-800 text-sm font-medium  hover:bg-green-50'>Ville</button>
      </div>
      
      
      </div>                                         


{/* 
-design from figma 'pluginto to code 

<div className="App  relative">
       <div className="w-[249px] h-[65px] relative">
  <div className="left-0 top-0 absolute text-white text-[13px] font-medium font-['Inter']">Rechercer selon  :</div>
  <div className="w-[73px] h-9 left-[88px] top-[29px] absolute">
    <div className="w-[73px] h-9 left-0 top-0 absolute bg-zinc-300 rounded-[5px]" />
    <div className="left-[18px] top-[10px] absolute text-neutral-800 text-[13px] font-medium font-['Inter']">plage</div>
  </div>
  <div className="w-[72px] h-9 left-[177px] top-[29px] absolute">
    <div className="w-[72px] h-9 left-0 top-0 absolute bg-zinc-300 rounded-[5px]" />
    <div className="left-[19px] top-[10px] absolute text-neutral-800 text-[13px] font-medium font-['Inter']">ville</div>
  </div>
  <div className="w-[72px] h-9 left-0 top-[29px] absolute">
    <div className="w-[72px] h-9 left-0 top-0 absolute bg-zinc-300 rounded-[5px]" />
    <div className="left-[10px] top-[10px] absolute text-neutral-800 text-[13px] font-medium font-['Inter']">faculté</div>
  </div>
</div>
</div> */}

      <div className='mt-8'>
      <label className='text-white text-sm font-medium'>Choisir selon votre choix:</label>
      <select className='w-full p-1 bg-zinc-300 border-none mt-2' >
        <option >Institue Superieur d'informatique et de mathematique de monstire </option>
        <option >Faculté de science a Monastire  </option>
        <option >Ecole preparatoire a monastire </option>
      </select>
      </div>

      <button className='w-24 self-end mt-10'>Rechercher</button>
    </form>
     
    </div>


    </div>
  )
}

export default Begining