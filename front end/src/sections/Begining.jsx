import React from "react";
import HeaderHouse from "../assets/HeaderHouse.png";

function Begining() {
  return (
    <div className="w-full h-full+   relative   overflow-hidden ">
      <img
        className="absolute w-full h-full object-cover "
        src={HeaderHouse}
        alt="HeaderHouse"
      ></img>
      <div
        className="relative  z-10 my-44 w-full  sm:max-w-[360px]   sm:mx-80 px-10 py-6  
     bg-gradient-to-b from-custom-indigo/90  to-custom-cyan/90 rounded-[5px]  "
      >
        <p className="text-white text-xl font-bold">
          Trouvrer votre maison facilment{" "}
        </p>

        <form className="flex flex-col">
          <div className="mt-11">
            <label className="text-white text-sm  font-normale">
              Rercherche selon:
            </label>

            <div className="flex justify-between mt-2">
              <button className="bg-zinc-300 p-1 py-2 w-[85px] rounded-md  text-neutral-800 text-sm font-normale hover:bg-green-50">
                Faculté
              </button>
              <button className="bg-zinc-300 p-1 w-[85px] rounded-md     text-neutral-800 text-sm font-normale hover:bg-green-50">
                Plage
              </button>
              <button className="bg-zinc-300 p-1 w-[85px] rounded-md     text-neutral-800 text-sm font-normale  hover:bg-green-50">
                Ville
              </button>
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

          <div className="mt-8">
            <label className="text-white text-sm font-normale">
              Choisir selon votre choix:
            </label>
            <select className="w-full p-2 mt-2 bg-zinc-300 text-neutral-800 text-sm font-sm border-none rounded">
              <option>
                Institut Supérieur d'Informatique et de Mathématiques de
                Monastir
              </option>
              <option>Faculté des Sciences à Monastir</option>
              <option>École Préparatoire à Monastir</option>
            </select>
          </div>

          <button className="self-end mt-16 mb-5 border border-stone-300 bg-custom-lime hover:bg-[#6E8B8A] transition-colors duration-300 text-white text-sm font-normal rounded-md p-2">
                    Chercher
                </button>
        </form>
      </div>
    </div>
  );
}

export default Begining;
